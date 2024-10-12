# SkuProperties

Properties of the sku.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_versions** | **List[str]** | Api versions that support this Sku. | [optional] [readonly] 
**capacity** | [**SkuCapacity**](SkuCapacity.md) |  | [optional] 
**costs** | [**List[SkuCost]**](SkuCost.md) | Cost of the Sku. | [optional] [readonly] 
**destination_to_service_location_map** | [**List[DestinationToServiceLocationMap]**](DestinationToServiceLocationMap.md) | The map of destination location to service location. | [optional] [readonly] 
**disabled_reason** | **str** | Reason why the Sku is disabled. | [optional] [readonly] 
**disabled_reason_message** | **str** | Message for why the Sku is disabled. | [optional] [readonly] 
**required_feature** | **str** | Required feature to access the sku. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sku_properties import SkuProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SkuProperties from a JSON string
sku_properties_instance = SkuProperties.from_json(json)
# print the JSON string representation of the object
print(SkuProperties.to_json())

# convert the object into a dict
sku_properties_dict = sku_properties_instance.to_dict()
# create an instance of SkuProperties from a dict
sku_properties_from_dict = SkuProperties.from_dict(sku_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


