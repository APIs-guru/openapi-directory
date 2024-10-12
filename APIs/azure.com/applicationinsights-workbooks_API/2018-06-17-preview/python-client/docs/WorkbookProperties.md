# WorkbookProperties

Properties that contain a workbook.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | Workbook category, as defined by the user at creation time. | 
**display_name** | **str** | The user-defined name (display name) of the workbook. | 
**serialized_data** | **str** | Configuration of this particular workbook. Configuration data is a string containing valid JSON | 
**tags** | **List[str]** | A list of 0 or more tags that are associated with this workbook definition | [optional] 
**time_modified** | **str** | Date and time in UTC of the last modification that was made to this workbook definition. | [optional] [readonly] 
**user_id** | **str** | Unique user id of the specific user that owns this workbook. | 
**version** | **str** | Workbook version | [optional] 

## Example

```python
from openapi_client.models.workbook_properties import WorkbookProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WorkbookProperties from a JSON string
workbook_properties_instance = WorkbookProperties.from_json(json)
# print the JSON string representation of the object
print(WorkbookProperties.to_json())

# convert the object into a dict
workbook_properties_dict = workbook_properties_instance.to_dict()
# create an instance of WorkbookProperties from a dict
workbook_properties_from_dict = WorkbookProperties.from_dict(workbook_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


