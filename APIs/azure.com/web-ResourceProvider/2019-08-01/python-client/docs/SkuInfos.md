# SkuInfos

Collection of SKU information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_type** | **str** | Resource type that this SKU applies to. | [optional] 
**skus** | [**List[GlobalCsmSkuDescription]**](GlobalCsmSkuDescription.md) | List of SKUs the subscription is able to use. | [optional] 

## Example

```python
from openapi_client.models.sku_infos import SkuInfos

# TODO update the JSON string below
json = "{}"
# create an instance of SkuInfos from a JSON string
sku_infos_instance = SkuInfos.from_json(json)
# print the JSON string representation of the object
print(SkuInfos.to_json())

# convert the object into a dict
sku_infos_dict = sku_infos_instance.to_dict()
# create an instance of SkuInfos from a dict
sku_infos_from_dict = SkuInfos.from_dict(sku_infos_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


