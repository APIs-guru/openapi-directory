# ServiceInventoriesCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ServiceInventory]**](ServiceInventory.md) |  | [optional] 
**links** | [**CollectionLinks**](CollectionLinks.md) |  | [optional] 
**meta** | [**CollectionMetadata**](CollectionMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.service_inventories_collection import ServiceInventoriesCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceInventoriesCollection from a JSON string
service_inventories_collection_instance = ServiceInventoriesCollection.from_json(json)
# print the JSON string representation of the object
print(ServiceInventoriesCollection.to_json())

# convert the object into a dict
service_inventories_collection_dict = service_inventories_collection_instance.to_dict()
# create an instance of ServiceInventoriesCollection from a dict
service_inventories_collection_from_dict = ServiceInventoriesCollection.from_dict(service_inventories_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


