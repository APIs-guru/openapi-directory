# WorkbookTemplatesListResult

WorkbookTemplate list result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[WorkbookTemplate]**](WorkbookTemplate.md) | An array of workbook templates. | [optional] 

## Example

```python
from openapi_client.models.workbook_templates_list_result import WorkbookTemplatesListResult

# TODO update the JSON string below
json = "{}"
# create an instance of WorkbookTemplatesListResult from a JSON string
workbook_templates_list_result_instance = WorkbookTemplatesListResult.from_json(json)
# print the JSON string representation of the object
print(WorkbookTemplatesListResult.to_json())

# convert the object into a dict
workbook_templates_list_result_dict = workbook_templates_list_result_instance.to_dict()
# create an instance of WorkbookTemplatesListResult from a dict
workbook_templates_list_result_from_dict = WorkbookTemplatesListResult.from_dict(workbook_templates_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


