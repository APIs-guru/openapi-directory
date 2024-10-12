# BatchDeleteVersionsMetadata

The metadata of an LRO from deleting multiple versions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failed_versions** | **List[str]** | The versions the operation failed to delete. | [optional] 

## Example

```python
from openapi_client.models.batch_delete_versions_metadata import BatchDeleteVersionsMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of BatchDeleteVersionsMetadata from a JSON string
batch_delete_versions_metadata_instance = BatchDeleteVersionsMetadata.from_json(json)
# print the JSON string representation of the object
print(BatchDeleteVersionsMetadata.to_json())

# convert the object into a dict
batch_delete_versions_metadata_dict = batch_delete_versions_metadata_instance.to_dict()
# create an instance of BatchDeleteVersionsMetadata from a dict
batch_delete_versions_metadata_from_dict = BatchDeleteVersionsMetadata.from_dict(batch_delete_versions_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


