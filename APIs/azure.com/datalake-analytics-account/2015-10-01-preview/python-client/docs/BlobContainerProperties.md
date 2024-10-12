# BlobContainerProperties

Azure Storage blob container properties information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_modified_time** | **datetime** | the last modified time of the blob container. | [optional] [readonly] 

## Example

```python
from openapi_client.models.blob_container_properties import BlobContainerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BlobContainerProperties from a JSON string
blob_container_properties_instance = BlobContainerProperties.from_json(json)
# print the JSON string representation of the object
print(BlobContainerProperties.to_json())

# convert the object into a dict
blob_container_properties_dict = blob_container_properties_instance.to_dict()
# create an instance of BlobContainerProperties from a dict
blob_container_properties_from_dict = BlobContainerProperties.from_dict(blob_container_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


