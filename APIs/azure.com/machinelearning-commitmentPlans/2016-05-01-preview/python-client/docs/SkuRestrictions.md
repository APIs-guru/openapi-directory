# SkuRestrictions

Describes restrictions which would prevent a SKU from being used.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason_code** | **str** | The reason for restriction. | [optional] [readonly] 
**type** | **str** | The type of restrictions. | [optional] [readonly] 
**values** | **List[str]** | The value of restrictions. If the restriction type is set to location. This would be different locations where the SKU is restricted. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sku_restrictions import SkuRestrictions

# TODO update the JSON string below
json = "{}"
# create an instance of SkuRestrictions from a JSON string
sku_restrictions_instance = SkuRestrictions.from_json(json)
# print the JSON string representation of the object
print(SkuRestrictions.to_json())

# convert the object into a dict
sku_restrictions_dict = sku_restrictions_instance.to_dict()
# create an instance of SkuRestrictions from a dict
sku_restrictions_from_dict = SkuRestrictions.from_dict(sku_restrictions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


