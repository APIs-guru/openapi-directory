# ResourceSkuCapacity

Describes scaling information of a SKU.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default** | **int** | The default capacity. | [optional] [readonly] 
**maximum** | **int** | The maximum capacity that can be set. | [optional] [readonly] 
**minimum** | **int** | The minimum capacity. | [optional] [readonly] 
**scale_type** | **str** | The scale type applicable to the sku. | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource_sku_capacity import ResourceSkuCapacity

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceSkuCapacity from a JSON string
resource_sku_capacity_instance = ResourceSkuCapacity.from_json(json)
# print the JSON string representation of the object
print(ResourceSkuCapacity.to_json())

# convert the object into a dict
resource_sku_capacity_dict = resource_sku_capacity_instance.to_dict()
# create an instance of ResourceSkuCapacity from a dict
resource_sku_capacity_from_dict = ResourceSkuCapacity.from_dict(resource_sku_capacity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


