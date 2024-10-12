# ServiceInstancesCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ServiceInstance]**](ServiceInstance.md) |  | [optional] 
**links** | [**CollectionLinks**](CollectionLinks.md) |  | [optional] 
**meta** | [**CollectionMetadata**](CollectionMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.service_instances_collection import ServiceInstancesCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceInstancesCollection from a JSON string
service_instances_collection_instance = ServiceInstancesCollection.from_json(json)
# print the JSON string representation of the object
print(ServiceInstancesCollection.to_json())

# convert the object into a dict
service_instances_collection_dict = service_instances_collection_instance.to_dict()
# create an instance of ServiceInstancesCollection from a dict
service_instances_collection_from_dict = ServiceInstancesCollection.from_dict(service_instances_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


