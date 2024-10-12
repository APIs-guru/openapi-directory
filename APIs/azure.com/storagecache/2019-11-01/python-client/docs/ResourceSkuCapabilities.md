# ResourceSkuCapabilities

A resource SKU capability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of a capability, such as ops/sec. | [optional] 
**value** | **str** | Quantity, if the capability is measured by quantity. | [optional] 

## Example

```python
from openapi_client.models.resource_sku_capabilities import ResourceSkuCapabilities

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceSkuCapabilities from a JSON string
resource_sku_capabilities_instance = ResourceSkuCapabilities.from_json(json)
# print the JSON string representation of the object
print(ResourceSkuCapabilities.to_json())

# convert the object into a dict
resource_sku_capabilities_dict = resource_sku_capabilities_instance.to_dict()
# create an instance of ResourceSkuCapabilities from a dict
resource_sku_capabilities_from_dict = ResourceSkuCapabilities.from_dict(resource_sku_capabilities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


