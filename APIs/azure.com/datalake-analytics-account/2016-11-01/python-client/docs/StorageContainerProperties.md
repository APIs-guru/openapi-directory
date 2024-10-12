# StorageContainerProperties

Azure Storage blob container properties information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_modified_time** | **datetime** | The last modified time of the blob container. | [optional] [readonly] 

## Example

```python
from openapi_client.models.storage_container_properties import StorageContainerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of StorageContainerProperties from a JSON string
storage_container_properties_instance = StorageContainerProperties.from_json(json)
# print the JSON string representation of the object
print(StorageContainerProperties.to_json())

# convert the object into a dict
storage_container_properties_dict = storage_container_properties_instance.to_dict()
# create an instance of StorageContainerProperties from a dict
storage_container_properties_from_dict = StorageContainerProperties.from_dict(storage_container_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


