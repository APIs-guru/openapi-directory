# NetworkMappingCollection

List of network mappings. As with NetworkMapping, it should be possible to reuse a prev version of this class. It doesn't seem likely this class could be anything more than a slightly bespoke collection of NetworkMapping. Hence it makes sense to override Load with Base.NetworkMapping instead of existing CurrentVersion.NetworkMapping.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The value of next link. | [optional] 
**value** | [**List[NetworkMapping]**](NetworkMapping.md) | The Network Mappings list. | [optional] 

## Example

```python
from openapi_client.models.network_mapping_collection import NetworkMappingCollection

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkMappingCollection from a JSON string
network_mapping_collection_instance = NetworkMappingCollection.from_json(json)
# print the JSON string representation of the object
print(NetworkMappingCollection.to_json())

# convert the object into a dict
network_mapping_collection_dict = network_mapping_collection_instance.to_dict()
# create an instance of NetworkMappingCollection from a dict
network_mapping_collection_from_dict = NetworkMappingCollection.from_dict(network_mapping_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


