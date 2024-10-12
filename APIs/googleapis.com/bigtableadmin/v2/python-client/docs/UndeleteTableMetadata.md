# UndeleteTableMetadata

Metadata type for the operation returned by google.bigtable.admin.v2.BigtableTableAdmin.UndeleteTable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | If set, the time at which this operation finished or was cancelled. | [optional] 
**name** | **str** | The name of the table being restored. | [optional] 
**start_time** | **str** | The time at which this operation started. | [optional] 

## Example

```python
from openapi_client.models.undelete_table_metadata import UndeleteTableMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of UndeleteTableMetadata from a JSON string
undelete_table_metadata_instance = UndeleteTableMetadata.from_json(json)
# print the JSON string representation of the object
print(UndeleteTableMetadata.to_json())

# convert the object into a dict
undelete_table_metadata_dict = undelete_table_metadata_instance.to_dict()
# create an instance of UndeleteTableMetadata from a dict
undelete_table_metadata_from_dict = UndeleteTableMetadata.from_dict(undelete_table_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


