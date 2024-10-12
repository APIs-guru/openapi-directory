# ServiceInstanceNodesCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ServiceInstanceNode]**](ServiceInstanceNode.md) |  | [optional] 
**links** | [**CollectionLinks**](CollectionLinks.md) |  | [optional] 
**meta** | [**CollectionMetadata**](CollectionMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.service_instance_nodes_collection import ServiceInstanceNodesCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceInstanceNodesCollection from a JSON string
service_instance_nodes_collection_instance = ServiceInstanceNodesCollection.from_json(json)
# print the JSON string representation of the object
print(ServiceInstanceNodesCollection.to_json())

# convert the object into a dict
service_instance_nodes_collection_dict = service_instance_nodes_collection_instance.to_dict()
# create an instance of ServiceInstanceNodesCollection from a dict
service_instance_nodes_collection_from_dict = ServiceInstanceNodesCollection.from_dict(service_instance_nodes_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


