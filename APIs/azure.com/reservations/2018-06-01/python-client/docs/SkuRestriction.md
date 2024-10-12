# SkuRestriction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason_code** | **str** | The reason for restriction. | [optional] 
**type** | **str** | The type of restrictions. | [optional] 
**values** | **List[str]** | The value of restrictions. If the restriction type is set to location. This would be different locations where the SKU is restricted. | [optional] 

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


