# ProtectionContainerMappingCollection

Protection container mapping collection class.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to fetch rest of the data. | [optional] 
**value** | [**List[ProtectionContainerMapping]**](ProtectionContainerMapping.md) | List of container mappings. | [optional] 

## Example

```python
from openapi_client.models.protection_container_mapping_collection import ProtectionContainerMappingCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ProtectionContainerMappingCollection from a JSON string
protection_container_mapping_collection_instance = ProtectionContainerMappingCollection.from_json(json)
# print the JSON string representation of the object
print(ProtectionContainerMappingCollection.to_json())

# convert the object into a dict
protection_container_mapping_collection_dict = protection_container_mapping_collection_instance.to_dict()
# create an instance of ProtectionContainerMappingCollection from a dict
protection_container_mapping_collection_from_dict = ProtectionContainerMappingCollection.from_dict(protection_container_mapping_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


