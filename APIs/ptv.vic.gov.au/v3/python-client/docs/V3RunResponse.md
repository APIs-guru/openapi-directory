# V3RunResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**run** | [**V3Run**](V3Run.md) |  | [optional] 
**status** | [**V3Status**](V3Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.v3_run_response import V3RunResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V3RunResponse from a JSON string
v3_run_response_instance = V3RunResponse.from_json(json)
# print the JSON string representation of the object
print(V3RunResponse.to_json())

# convert the object into a dict
v3_run_response_dict = v3_run_response_instance.to_dict()
# create an instance of V3RunResponse from a dict
v3_run_response_from_dict = V3RunResponse.from_dict(v3_run_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


