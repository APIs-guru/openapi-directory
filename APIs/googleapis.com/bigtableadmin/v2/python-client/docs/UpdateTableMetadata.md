# UpdateTableMetadata

Metadata type for the operation returned by UpdateTable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | If set, the time at which this operation finished or was canceled. | [optional] 
**name** | **str** | The name of the table being updated. | [optional] 
**start_time** | **str** | The time at which this operation started. | [optional] 

## Example

```python
from openapi_client.models.update_table_metadata import UpdateTableMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateTableMetadata from a JSON string
update_table_metadata_instance = UpdateTableMetadata.from_json(json)
# print the JSON string representation of the object
print(UpdateTableMetadata.to_json())

# convert the object into a dict
update_table_metadata_dict = update_table_metadata_instance.to_dict()
# create an instance of UpdateTableMetadata from a dict
update_table_metadata_from_dict = UpdateTableMetadata.from_dict(update_table_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


