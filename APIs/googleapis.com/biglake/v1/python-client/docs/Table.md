# Table

Represents a table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The creation time of the table. | [optional] [readonly] 
**delete_time** | **str** | Output only. The deletion time of the table. Only set after the table is deleted. | [optional] [readonly] 
**etag** | **str** | The checksum of a table object computed by the server based on the value of other fields. It may be sent on update requests to ensure the client has an up-to-date value before proceeding. It is only checked for update table operations. | [optional] 
**expire_time** | **str** | Output only. The time when this table is considered expired. Only set after the table is deleted. | [optional] [readonly] 
**hive_options** | [**HiveTableOptions**](HiveTableOptions.md) |  | [optional] 
**name** | **str** | Output only. The resource name. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id}/tables/{table_id} | [optional] [readonly] 
**type** | **str** | The table type. | [optional] 
**update_time** | **str** | Output only. The last modification time of the table. | [optional] [readonly] 

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


