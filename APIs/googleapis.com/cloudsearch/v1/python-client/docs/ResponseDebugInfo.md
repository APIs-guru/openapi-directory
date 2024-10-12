# ResponseDebugInfo

Debugging information about the response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**formatted_debug_info** | **str** | General debug info formatted for display. | [optional] 

## Example

```python
from openapi_client.models.response_debug_info import ResponseDebugInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseDebugInfo from a JSON string
response_debug_info_instance = ResponseDebugInfo.from_json(json)
# print the JSON string representation of the object
print(ResponseDebugInfo.to_json())

# convert the object into a dict
response_debug_info_dict = response_debug_info_instance.to_dict()
# create an instance of ResponseDebugInfo from a dict
response_debug_info_from_dict = ResponseDebugInfo.from_dict(response_debug_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


