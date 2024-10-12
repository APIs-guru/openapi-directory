# WorkbookPropertiesUpdateParameters

Properties that contain a workbook for PATCH operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | Workbook category, as defined by the user at creation time. | [optional] 
**display_name** | **str** | The user-defined name (display name) of the workbook. | [optional] 
**serialized_data** | **str** | Configuration of this particular workbook. Configuration data is a string containing valid JSON | [optional] 
**tags** | **List[str]** | A list of 0 or more tags that are associated with this workbook definition | [optional] 

## Example

```python
from openapi_client.models.workbook_properties_update_parameters import WorkbookPropertiesUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of WorkbookPropertiesUpdateParameters from a JSON string
workbook_properties_update_parameters_instance = WorkbookPropertiesUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(WorkbookPropertiesUpdateParameters.to_json())

# convert the object into a dict
workbook_properties_update_parameters_dict = workbook_properties_update_parameters_instance.to_dict()
# create an instance of WorkbookPropertiesUpdateParameters from a dict
workbook_properties_update_parameters_from_dict = WorkbookPropertiesUpdateParameters.from_dict(workbook_properties_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


