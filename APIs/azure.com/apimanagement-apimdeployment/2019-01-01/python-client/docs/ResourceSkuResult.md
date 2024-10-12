# ResourceSkuResult

Describes an available API Management service SKU.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | [**ResourceSkuCapacity**](ResourceSkuCapacity.md) |  | [optional] 
**resource_type** | **str** | The type of resource the SKU applies to. | [optional] [readonly] 
**sku** | [**ResourceSku**](ResourceSku.md) |  | [optional] 

## Example

```python
from openapi_client.models.resource_sku_result import ResourceSkuResult

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceSkuResult from a JSON string
resource_sku_result_instance = ResourceSkuResult.from_json(json)
# print the JSON string representation of the object
print(ResourceSkuResult.to_json())

# convert the object into a dict
resource_sku_result_dict = resource_sku_result_instance.to_dict()
# create an instance of ResourceSkuResult from a dict
resource_sku_result_from_dict = ResourceSkuResult.from_dict(resource_sku_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


