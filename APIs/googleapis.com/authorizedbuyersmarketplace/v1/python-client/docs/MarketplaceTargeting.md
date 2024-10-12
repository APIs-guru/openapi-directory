# MarketplaceTargeting

Targeting represents different criteria that can be used to target inventory. For example, they can choose to target inventory only if the user is in the US. Multiple types of targeting are always applied as a logical AND, unless noted otherwise.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**daypart_targeting** | [**DayPartTargeting**](DayPartTargeting.md) |  | [optional] 
**geo_targeting** | [**CriteriaTargeting**](CriteriaTargeting.md) |  | [optional] 
**inventory_size_targeting** | [**InventorySizeTargeting**](InventorySizeTargeting.md) |  | [optional] 
**inventory_type_targeting** | [**InventoryTypeTargeting**](InventoryTypeTargeting.md) |  | [optional] 
**placement_targeting** | [**PlacementTargeting**](PlacementTargeting.md) |  | [optional] 
**technology_targeting** | [**TechnologyTargeting**](TechnologyTargeting.md) |  | [optional] 
**user_list_targeting** | [**CriteriaTargeting**](CriteriaTargeting.md) |  | [optional] 
**video_targeting** | [**VideoTargeting**](VideoTargeting.md) |  | [optional] 

## Example

```python
from openapi_client.models.marketplace_targeting import MarketplaceTargeting

# TODO update the JSON string below
json = "{}"
# create an instance of MarketplaceTargeting from a JSON string
marketplace_targeting_instance = MarketplaceTargeting.from_json(json)
# print the JSON string representation of the object
print(MarketplaceTargeting.to_json())

# convert the object into a dict
marketplace_targeting_dict = marketplace_targeting_instance.to_dict()
# create an instance of MarketplaceTargeting from a dict
marketplace_targeting_from_dict = MarketplaceTargeting.from_dict(marketplace_targeting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


