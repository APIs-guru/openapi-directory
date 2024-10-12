# DeletionMetadata

Information about a deleted message. A message is deleted when `delete_time` is set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deletion_type** | **str** | Indicates who deleted the message. | [optional] 

## Example

```python
from openapi_client.models.deletion_metadata import DeletionMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of DeletionMetadata from a JSON string
deletion_metadata_instance = DeletionMetadata.from_json(json)
# print the JSON string representation of the object
print(DeletionMetadata.to_json())

# convert the object into a dict
deletion_metadata_dict = deletion_metadata_instance.to_dict()
# create an instance of DeletionMetadata from a dict
deletion_metadata_from_dict = DeletionMetadata.from_dict(deletion_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


