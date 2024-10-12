# SkuRestriction

The restrictions because of which SKU cannot be used.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason_code** | **str** | The SKU restriction reason. | [optional] [readonly] 
**restriction_info** | [**SkuRestrictionInfo**](SkuRestrictionInfo.md) |  | [optional] 
**type** | **str** | The type of the restriction. | [optional] [readonly] 
**values** | **List[str]** | The locations where sku is restricted. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sku_restriction import SkuRestriction

# TODO update the JSON string below
json = "{}"
# create an instance of SkuRestriction from a JSON string
sku_restriction_instance = SkuRestriction.from_json(json)
# print the JSON string representation of the object
print(SkuRestriction.to_json())

# convert the object into a dict
sku_restriction_dict = sku_restriction_instance.to_dict()
# create an instance of SkuRestriction from a dict
sku_restriction_from_dict = SkuRestriction.from_dict(sku_restriction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


