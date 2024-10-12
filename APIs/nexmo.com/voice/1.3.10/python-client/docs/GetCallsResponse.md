# GetCallsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**embedded** | [**GetCallsResponseEmbedded**](GetCallsResponseEmbedded.md) |  | [optional] 
**links** | [**GetCallsResponseLinks**](GetCallsResponseLinks.md) |  | [optional] 
**count** | **int** |  | [optional] 
**page_size** | **int** |  | [optional] 
**record_index** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.get_calls_response import GetCallsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetCallsResponse from a JSON string
get_calls_response_instance = GetCallsResponse.from_json(json)
# print the JSON string representation of the object
print(GetCallsResponse.to_json())

# convert the object into a dict
get_calls_response_dict = get_calls_response_instance.to_dict()
# create an instance of GetCallsResponse from a dict
get_calls_response_from_dict = GetCallsResponse.from_dict(get_calls_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


