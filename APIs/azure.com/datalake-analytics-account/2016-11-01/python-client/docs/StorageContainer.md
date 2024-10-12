# StorageContainer

Azure Storage blob container information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**StorageContainerProperties**](StorageContainerProperties.md) |  | [optional] 
**id** | **str** | The resource identifier. | [optional] [readonly] 
**name** | **str** | The resource name. | [optional] [readonly] 
**type** | **str** | The resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.storage_container import StorageContainer

# TODO update the JSON string below
json = "{}"
# create an instance of StorageContainer from a JSON string
storage_container_instance = StorageContainer.from_json(json)
# print the JSON string representation of the object
print(StorageContainer.to_json())

# convert the object into a dict
storage_container_dict = storage_container_instance.to_dict()
# create an instance of StorageContainer from a dict
storage_container_from_dict = StorageContainer.from_dict(storage_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


