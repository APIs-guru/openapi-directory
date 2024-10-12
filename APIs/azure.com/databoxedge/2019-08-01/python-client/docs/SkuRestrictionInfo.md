# SkuRestrictionInfo

The restriction info with locations and zones.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locations** | **List[str]** | The locations. | [optional] [readonly] 
**zones** | **List[str]** | The zones. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sku_restriction_info import SkuRestrictionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SkuRestrictionInfo from a JSON string
sku_restriction_info_instance = SkuRestrictionInfo.from_json(json)
# print the JSON string representation of the object
print(SkuRestrictionInfo.to_json())

# convert the object into a dict
sku_restriction_info_dict = sku_restriction_info_instance.to_dict()
# create an instance of SkuRestrictionInfo from a dict
sku_restriction_info_from_dict = SkuRestrictionInfo.from_dict(sku_restriction_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


