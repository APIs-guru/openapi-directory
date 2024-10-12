# ProtectionContainerCollection

Protection Container collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The value of next link. | [optional] 
**value** | [**List[ProtectionContainer]**](ProtectionContainer.md) | The Protection Container details. | [optional] 

## Example

```python
from openapi_client.models.protection_container_collection import ProtectionContainerCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ProtectionContainerCollection from a JSON string
protection_container_collection_instance = ProtectionContainerCollection.from_json(json)
# print the JSON string representation of the object
print(ProtectionContainerCollection.to_json())

# convert the object into a dict
protection_container_collection_dict = protection_container_collection_instance.to_dict()
# create an instance of ProtectionContainerCollection from a dict
protection_container_collection_from_dict = ProtectionContainerCollection.from_dict(protection_container_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


