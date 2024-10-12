# ResourceTypeSkuCollection

Collection of the resource type Sku.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ResourceTypeSku]**](ResourceTypeSku.md) | Gets or sets the collection of resource type Sku. | [optional] 

## Example

```python
from openapi_client.models.resource_type_sku_collection import ResourceTypeSkuCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceTypeSkuCollection from a JSON string
resource_type_sku_collection_instance = ResourceTypeSkuCollection.from_json(json)
# print the JSON string representation of the object
print(ResourceTypeSkuCollection.to_json())

# convert the object into a dict
resource_type_sku_collection_dict = resource_type_sku_collection_instance.to_dict()
# create an instance of ResourceTypeSkuCollection from a dict
resource_type_sku_collection_from_dict = ResourceTypeSkuCollection.from_dict(resource_type_sku_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


