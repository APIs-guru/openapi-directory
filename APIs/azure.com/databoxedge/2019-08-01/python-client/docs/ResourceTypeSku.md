# ResourceTypeSku

SkuInformation object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_versions** | **List[str]** | The API versions in which SKU is available | [optional] [readonly] 
**costs** | [**List[SkuCost]**](SkuCost.md) | The pricing info of the Sku. | [optional] [readonly] 
**family** | **str** | The Sku family | [optional] [readonly] 
**kind** | **str** | The Sku kind | [optional] [readonly] 
**location_info** | [**List[SkuLocationInfo]**](SkuLocationInfo.md) | Availability of the SKU for the location/zone | [optional] [readonly] 
**locations** | **List[str]** | Availability of the SKU for the region | [optional] [readonly] 
**name** | **str** | The Sku name | [optional] [readonly] 
**resource_type** | **str** | The type of the resource | [optional] [readonly] 
**restrictions** | [**List[SkuRestriction]**](SkuRestriction.md) | Restrictions of the SKU availability. | [optional] [readonly] 
**tier** | **str** | The Sku tier | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource_type_sku import ResourceTypeSku

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceTypeSku from a JSON string
resource_type_sku_instance = ResourceTypeSku.from_json(json)
# print the JSON string representation of the object
print(ResourceTypeSku.to_json())

# convert the object into a dict
resource_type_sku_dict = resource_type_sku_instance.to_dict()
# create an instance of ResourceTypeSku from a dict
resource_type_sku_from_dict = ResourceTypeSku.from_dict(resource_type_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


