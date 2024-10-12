# ServiceOfferingNodesCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ServiceOfferingNode]**](ServiceOfferingNode.md) |  | [optional] 
**links** | [**CollectionLinks**](CollectionLinks.md) |  | [optional] 
**meta** | [**CollectionMetadata**](CollectionMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.service_offering_nodes_collection import ServiceOfferingNodesCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceOfferingNodesCollection from a JSON string
service_offering_nodes_collection_instance = ServiceOfferingNodesCollection.from_json(json)
# print the JSON string representation of the object
print(ServiceOfferingNodesCollection.to_json())

# convert the object into a dict
service_offering_nodes_collection_dict = service_offering_nodes_collection_instance.to_dict()
# create an instance of ServiceOfferingNodesCollection from a dict
service_offering_nodes_collection_from_dict = ServiceOfferingNodesCollection.from_dict(service_offering_nodes_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


