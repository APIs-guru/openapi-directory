# ResourceSkuRestrictionInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locations** | **List[str]** | Locations where the SKU is restricted | [optional] [readonly] 
**zones** | **List[str]** | List of availability zones where the SKU is restricted. | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource_sku_restriction_info import ResourceSkuRestrictionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceSkuRestrictionInfo from a JSON string
resource_sku_restriction_info_instance = ResourceSkuRestrictionInfo.from_json(json)
# print the JSON string representation of the object
print(ResourceSkuRestrictionInfo.to_json())

# convert the object into a dict
resource_sku_restriction_info_dict = resource_sku_restriction_info_instance.to_dict()
# create an instance of ResourceSkuRestrictionInfo from a dict
resource_sku_restriction_info_from_dict = ResourceSkuRestrictionInfo.from_dict(resource_sku_restriction_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


