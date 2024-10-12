# SkuDescription

The purchase SKU for CloudSimple paid resources

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | SKU&#39;s id | 
**name** | **str** | SKU&#39;s name | 

## Example

```python
from openapi_client.models.sku_description import SkuDescription

# TODO update the JSON string below
json = "{}"
# create an instance of SkuDescription from a JSON string
sku_description_instance = SkuDescription.from_json(json)
# print the JSON string representation of the object
print(SkuDescription.to_json())

# convert the object into a dict
sku_description_dict = sku_description_instance.to_dict()
# create an instance of SkuDescription from a dict
sku_description_from_dict = SkuDescription.from_dict(sku_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


