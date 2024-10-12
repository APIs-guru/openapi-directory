# ResourceSku

The SKU of a resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | **int** | The scale-out capacity of the resource. 1 is 1x, 2 is 2x, etc. This impacts the quantities and cost of any commitment plan resource. | [optional] 
**name** | **str** | The SKU name. Along with tier, uniquely identifies the SKU. | [optional] 
**tier** | **str** | The SKU tier. Along with name, uniquely identifies the SKU. | [optional] 

## Example

```python
from openapi_client.models.resource_sku import ResourceSku

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceSku from a JSON string
resource_sku_instance = ResourceSku.from_json(json)
# print the JSON string representation of the object
print(ResourceSku.to_json())

# convert the object into a dict
resource_sku_dict = resource_sku_instance.to_dict()
# create an instance of ResourceSku from a dict
resource_sku_from_dict = ResourceSku.from_dict(resource_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


