# WorkbookUpdateParameters

The parameters that can be provided when updating workbook properties properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | The kind of workbook. Choices are user and shared. | [optional] 
**properties** | [**WorkbookPropertiesUpdateParameters**](WorkbookPropertiesUpdateParameters.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.workbook_update_parameters import WorkbookUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of WorkbookUpdateParameters from a JSON string
workbook_update_parameters_instance = WorkbookUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(WorkbookUpdateParameters.to_json())

# convert the object into a dict
workbook_update_parameters_dict = workbook_update_parameters_instance.to_dict()
# create an instance of WorkbookUpdateParameters from a dict
workbook_update_parameters_from_dict = WorkbookUpdateParameters.from_dict(workbook_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


