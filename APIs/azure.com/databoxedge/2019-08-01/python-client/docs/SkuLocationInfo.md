# SkuLocationInfo

The location info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The location. | [optional] [readonly] 
**sites** | **List[str]** | The sites. | [optional] [readonly] 
**zones** | **List[str]** | The zones. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sku_location_info import SkuLocationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SkuLocationInfo from a JSON string
sku_location_info_instance = SkuLocationInfo.from_json(json)
# print the JSON string representation of the object
print(SkuLocationInfo.to_json())

# convert the object into a dict
sku_location_info_dict = sku_location_info_instance.to_dict()
# create an instance of SkuLocationInfo from a dict
sku_location_info_from_dict = SkuLocationInfo.from_dict(sku_location_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


