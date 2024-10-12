# WorkbookProperties

Properties that contain a workbook.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | Workbook category, as defined by the user at creation time. | 
**kind** | **str** | Enum indicating if this workbook definition is owned by a specific user or is shared between all users with access to the Application Insights component. | [default to 'shared']
**name** | **str** | The user-defined name of the workbook. | 
**serialized_data** | **str** | Configuration of this particular workbook. Configuration data is a string containing valid JSON | 
**source_resource_id** | **str** | Optional resourceId for a source resource. | [optional] 
**tags** | **List[str]** | A list of 0 or more tags that are associated with this workbook definition | [optional] 
**time_modified** | **str** | Date and time in UTC of the last modification that was made to this workbook definition. | [optional] [readonly] 
**user_id** | **str** | Unique user id of the specific user that owns this workbook. | 
**version** | **str** | This instance&#39;s version of the data model. This can change as new features are added that can be marked workbook. | [optional] 
**workbook_id** | **str** | Internally assigned unique id of the workbook definition. | 

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


