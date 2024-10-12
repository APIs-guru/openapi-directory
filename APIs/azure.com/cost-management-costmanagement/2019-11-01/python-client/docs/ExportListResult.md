# ExportListResult

Result of listing exports. It contains a list of available exports in the scope provided.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Export]**](Export.md) | The list of exports. | [optional] [readonly] 

## Example

```python
from openapi_client.models.export_list_result import ExportListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ExportListResult from a JSON string
export_list_result_instance = ExportListResult.from_json(json)
# print the JSON string representation of the object
print(ExportListResult.to_json())

# convert the object into a dict
export_list_result_dict = export_list_result_instance.to_dict()
# create an instance of ExportListResult from a dict
export_list_result_from_dict = ExportListResult.from_dict(export_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


