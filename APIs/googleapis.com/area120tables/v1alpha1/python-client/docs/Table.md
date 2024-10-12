# Table

A single table. NextId: 8

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | [**List[ColumnDescription]**](ColumnDescription.md) | List of columns in this table. Order of columns matches the display order. | [optional] 
**create_time** | **str** | Time when the table was created. | [optional] 
**display_name** | **str** | The human readable title of the table. | [optional] 
**name** | **str** | The resource name of the table. Table names have the form &#x60;tables/{table}&#x60;. | [optional] 
**saved_views** | [**List[SavedView]**](SavedView.md) | Saved views for this table. | [optional] 
**time_zone** | **str** | The time zone of the table. IANA Time Zone Database time zone, e.g. \&quot;America/New_York\&quot;. | [optional] 
**update_time** | **str** | Time when the table was last updated excluding updates to individual rows | [optional] 

## Example

```python
from openapi_client.models.table import Table

# TODO update the JSON string below
json = "{}"
# create an instance of Table from a JSON string
table_instance = Table.from_json(json)
# print the JSON string representation of the object
print(Table.to_json())

# convert the object into a dict
table_dict = table_instance.to_dict()
# create an instance of Table from a dict
table_from_dict = Table.from_dict(table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


