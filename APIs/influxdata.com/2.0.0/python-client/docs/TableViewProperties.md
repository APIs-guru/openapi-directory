# TableViewProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**colors** | [**List[DashboardColor]**](DashboardColor.md) | Colors define color encoding of data into a visualization | 
**decimal_places** | [**DecimalPlaces**](DecimalPlaces.md) |  | 
**field_options** | [**List[RenamableField]**](RenamableField.md) | fieldOptions represent the fields retrieved by the query with customization options | 
**note** | **str** |  | 
**queries** | [**List[DashboardQuery]**](DashboardQuery.md) |  | 
**shape** | **str** |  | 
**show_note_when_empty** | **bool** | If true, will display note when empty | 
**table_options** | [**TableViewPropertiesTableOptions**](TableViewPropertiesTableOptions.md) |  | 
**time_format** | **str** | timeFormat describes the display format for time values according to moment.js date formatting | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.table_view_properties import TableViewProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TableViewProperties from a JSON string
table_view_properties_instance = TableViewProperties.from_json(json)
# print the JSON string representation of the object
print(TableViewProperties.to_json())

# convert the object into a dict
table_view_properties_dict = table_view_properties_instance.to_dict()
# create an instance of TableViewProperties from a dict
table_view_properties_from_dict = TableViewProperties.from_dict(table_view_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


