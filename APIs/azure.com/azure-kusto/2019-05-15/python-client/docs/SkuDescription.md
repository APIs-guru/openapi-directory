# SkuDescription

The Kusto SKU description of given resource type

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location_info** | [**List[SkuLocationInfoItem]**](SkuLocationInfoItem.md) | Locations and zones | [optional] [readonly] 
**locations** | **List[str]** | The set of locations that the SKU is available | [optional] [readonly] 
**name** | **str** | The name of the SKU | [optional] [readonly] 
**resource_type** | **str** | The resource type | [optional] [readonly] 
**restrictions** | **List[object]** | The restrictions because of which SKU cannot be used | [optional] [readonly] 
**tier** | **str** | The tier of the SKU | [optional] [readonly] 

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


