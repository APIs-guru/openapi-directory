# WorkbooksListResult

Workbook list result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Workbook]**](Workbook.md) | An array of workbooks. | [optional] 

## Example

```python
from openapi_client.models.workbooks_list_result import WorkbooksListResult

# TODO update the JSON string below
json = "{}"
# create an instance of WorkbooksListResult from a JSON string
workbooks_list_result_instance = WorkbooksListResult.from_json(json)
# print the JSON string representation of the object
print(WorkbooksListResult.to_json())

# convert the object into a dict
workbooks_list_result_dict = workbooks_list_result_instance.to_dict()
# create an instance of WorkbooksListResult from a dict
workbooks_list_result_from_dict = WorkbooksListResult.from_dict(workbooks_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


