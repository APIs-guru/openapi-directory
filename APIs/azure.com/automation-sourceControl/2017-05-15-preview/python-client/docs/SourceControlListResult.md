# SourceControlListResult

The response model for the list source controls operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The next link. | [optional] 
**value** | [**List[SourceControl]**](SourceControl.md) | The list of source controls. | [optional] 

## Example

```python
from openapi_client.models.source_control_list_result import SourceControlListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SourceControlListResult from a JSON string
source_control_list_result_instance = SourceControlListResult.from_json(json)
# print the JSON string representation of the object
print(SourceControlListResult.to_json())

# convert the object into a dict
source_control_list_result_dict = source_control_list_result_instance.to_dict()
# create an instance of SourceControlListResult from a dict
source_control_list_result_from_dict = SourceControlListResult.from_dict(source_control_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


