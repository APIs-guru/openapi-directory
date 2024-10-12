# Region

Represents a geographic region that you can use as a target with both the `RegionalInventory` and `ShippingSettings` services. You can define regions as collections of either postal codes or, in some countries, using predefined geotargets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name of the region. | [optional] 
**geotarget_area** | [**RegionGeoTargetArea**](RegionGeoTargetArea.md) |  | [optional] 
**merchant_id** | **str** | Output only. Immutable. Merchant that owns the region. | [optional] [readonly] 
**postal_code_area** | [**RegionPostalCodeArea**](RegionPostalCodeArea.md) |  | [optional] 
**region_id** | **str** | Output only. Immutable. The ID uniquely identifying each region. | [optional] [readonly] 
**regional_inventory_eligible** | **bool** | Output only. Indicates if the region is eligible to use in the Regional Inventory configuration. | [optional] [readonly] 
**shipping_eligible** | **bool** | Output only. Indicates if the region is eligible to use in the Shipping Services configuration. | [optional] [readonly] 

## Example

```python
from openapi_client.models.region import Region

# TODO update the JSON string below
json = "{}"
# create an instance of Region from a JSON string
region_instance = Region.from_json(json)
# print the JSON string representation of the object
print(Region.to_json())

# convert the object into a dict
region_dict = region_instance.to_dict()
# create an instance of Region from a dict
region_from_dict = Region.from_dict(region_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


