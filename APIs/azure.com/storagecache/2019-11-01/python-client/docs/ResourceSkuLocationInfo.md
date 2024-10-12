# ResourceSkuLocationInfo

Resource SKU location information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Location where this SKU is available. | [optional] 
**zones** | **List[str]** | Zones if any. | [optional] 

## Example

```python
from openapi_client.models.resource_sku_location_info import ResourceSkuLocationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceSkuLocationInfo from a JSON string
resource_sku_location_info_instance = ResourceSkuLocationInfo.from_json(json)
# print the JSON string representation of the object
print(ResourceSkuLocationInfo.to_json())

# convert the object into a dict
resource_sku_location_info_dict = resource_sku_location_info_instance.to_dict()
# create an instance of ResourceSkuLocationInfo from a dict
resource_sku_location_info_from_dict = ResourceSkuLocationInfo.from_dict(resource_sku_location_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


