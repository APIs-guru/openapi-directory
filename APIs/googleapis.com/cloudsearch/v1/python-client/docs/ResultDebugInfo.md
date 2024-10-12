# ResultDebugInfo

Debugging information about the result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**formatted_debug_info** | **str** | General debug info formatted for display. | [optional] 

## Example

```python
from openapi_client.models.result_debug_info import ResultDebugInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ResultDebugInfo from a JSON string
result_debug_info_instance = ResultDebugInfo.from_json(json)
# print the JSON string representation of the object
print(ResultDebugInfo.to_json())

# convert the object into a dict
result_debug_info_dict = result_debug_info_instance.to_dict()
# create an instance of ResultDebugInfo from a dict
result_debug_info_from_dict = ResultDebugInfo.from_dict(result_debug_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


