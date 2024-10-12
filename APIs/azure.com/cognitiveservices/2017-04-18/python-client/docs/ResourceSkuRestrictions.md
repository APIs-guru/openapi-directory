# ResourceSkuRestrictions

Describes restrictions of a SKU.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason_code** | **str** | The reason for restriction. | [optional] [readonly] 
**restriction_info** | [**ResourceSkuRestrictionInfo**](ResourceSkuRestrictionInfo.md) |  | [optional] 
**type** | **str** | The type of restrictions. | [optional] [readonly] 
**values** | **List[str]** | The value of restrictions. If the restriction type is set to location. This would be different locations where the SKU is restricted. | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource_sku_restrictions import ResourceSkuRestrictions

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceSkuRestrictions from a JSON string
resource_sku_restrictions_instance = ResourceSkuRestrictions.from_json(json)
# print the JSON string representation of the object
print(ResourceSkuRestrictions.to_json())

# convert the object into a dict
resource_sku_restrictions_dict = resource_sku_restrictions_instance.to_dict()
# create an instance of ResourceSkuRestrictions from a dict
resource_sku_restrictions_from_dict = ResourceSkuRestrictions.from_dict(resource_sku_restrictions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


