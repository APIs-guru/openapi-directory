# Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**copyrights** | **List[str]** |  | [optional] 
**processing_time** | **int** | Processing time in ms. If job is still waiting in queue, processing_time is 0 | [optional] 
**solution** | [**Solution**](Solution.md) |  | [optional] 
**status** | **str** | Indicates the current status of the job | [optional] 
**waiting_time_in_queue** | **int** | Waiting time in ms | [optional] 

## Example

```python
from openapi_client.models.response import Response

# TODO update the JSON string below
json = "{}"
# create an instance of Response from a JSON string
response_instance = Response.from_json(json)
# print the JSON string representation of the object
print(Response.to_json())

# convert the object into a dict
response_dict = response_instance.to_dict()
# create an instance of Response from a dict
response_from_dict = Response.from_dict(response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


