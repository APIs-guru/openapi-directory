# TableMetadataCacheUsage

Table level detail on the usage of metadata caching. Only set for Metadata caching eligible tables referenced in the query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**explanation** | **str** | Free form human-readable reason metadata caching was unused for the job. | [optional] 
**table_reference** | [**TableReference**](TableReference.md) |  | [optional] 
**table_type** | **str** | [Table type](/bigquery/docs/reference/rest/v2/tables#Table.FIELDS.type). | [optional] 
**unused_reason** | **str** | Reason for not using metadata caching for the table. | [optional] 

## Example

```python
from openapi_client.models.table_metadata_cache_usage import TableMetadataCacheUsage

# TODO update the JSON string below
json = "{}"
# create an instance of TableMetadataCacheUsage from a JSON string
table_metadata_cache_usage_instance = TableMetadataCacheUsage.from_json(json)
# print the JSON string representation of the object
print(TableMetadataCacheUsage.to_json())

# convert the object into a dict
table_metadata_cache_usage_dict = table_metadata_cache_usage_instance.to_dict()
# create an instance of TableMetadataCacheUsage from a dict
table_metadata_cache_usage_from_dict = TableMetadataCacheUsage.from_dict(table_metadata_cache_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


