# SkuCapability

Describes The SKU capabilities object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The capability name. | [optional] [readonly] 
**value** | **str** | The capability value. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sku_capability import SkuCapability

# TODO update the JSON string below
json = "{}"
# create an instance of SkuCapability from a JSON string
sku_capability_instance = SkuCapability.from_json(json)
# print the JSON string representation of the object
print(SkuCapability.to_json())

# convert the object into a dict
sku_capability_dict = sku_capability_instance.to_dict()
# create an instance of SkuCapability from a dict
sku_capability_from_dict = SkuCapability.from_dict(sku_capability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


