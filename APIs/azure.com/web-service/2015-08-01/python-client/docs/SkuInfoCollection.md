# SkuInfoCollection

Collection of SkuInfos

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources | [optional] 
**value** | [**List[SkuInfo]**](SkuInfo.md) | Collection of resources | [optional] 

## Example

```python
from openapi_client.models.sku_info_collection import SkuInfoCollection

# TODO update the JSON string below
json = "{}"
# create an instance of SkuInfoCollection from a JSON string
sku_info_collection_instance = SkuInfoCollection.from_json(json)
# print the JSON string representation of the object
print(SkuInfoCollection.to_json())

# convert the object into a dict
sku_info_collection_dict = sku_info_collection_instance.to_dict()
# create an instance of SkuInfoCollection from a dict
sku_info_collection_from_dict = SkuInfoCollection.from_dict(sku_info_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


