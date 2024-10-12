# ResourceSkuLocationInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Location of the SKU | [optional] [readonly] 
**zone_details** | [**List[ResourceSkuZoneDetails]**](ResourceSkuZoneDetails.md) | Details of capabilities available to a SKU in specific zones. | [optional] [readonly] 
**zones** | **List[str]** | List of availability zones where the SKU is supported. | [optional] [readonly] 

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


