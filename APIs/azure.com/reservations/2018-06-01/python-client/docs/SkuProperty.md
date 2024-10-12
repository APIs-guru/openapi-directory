# SkuProperty


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | An invariant to describe the feature. | [optional] 
**value** | **str** | An invariant if the feature is measured by quantity. | [optional] 

## Example

```python
from openapi_client.models.sku_property import SkuProperty

# TODO update the JSON string below
json = "{}"
# create an instance of SkuProperty from a JSON string
sku_property_instance = SkuProperty.from_json(json)
# print the JSON string representation of the object
print(SkuProperty.to_json())

# convert the object into a dict
sku_property_dict = sku_property_instance.to_dict()
# create an instance of SkuProperty from a dict
sku_property_from_dict = SkuProperty.from_dict(sku_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


