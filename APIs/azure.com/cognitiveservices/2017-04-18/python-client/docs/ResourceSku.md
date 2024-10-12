# ResourceSku

Describes an available Cognitive Services SKU.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | The Kind of resources that are supported in this SKU. | [optional] [readonly] 
**locations** | **List[str]** | The set of locations that the SKU is available. | [optional] [readonly] 
**name** | **str** | The name of SKU. | [optional] [readonly] 
**resource_type** | **str** | The type of resource the SKU applies to. | [optional] [readonly] 
**restrictions** | [**List[ResourceSkuRestrictions]**](ResourceSkuRestrictions.md) | The restrictions because of which SKU cannot be used. This is empty if there are no restrictions. | [optional] [readonly] 
**tier** | **str** | Specifies the tier of Cognitive Services account. | [optional] [readonly] 

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


