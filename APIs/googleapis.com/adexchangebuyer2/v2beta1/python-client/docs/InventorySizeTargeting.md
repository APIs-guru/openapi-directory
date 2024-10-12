# InventorySizeTargeting

Represents the size of an ad unit that can be targeted on an ad request. It only applies to Private Auction, AdX Preferred Deals and Auction Packages. This targeting does not apply to Programmatic Guaranteed and Preferred Deals in Ad Manager.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**excluded_inventory_sizes** | [**List[AdSize]**](AdSize.md) | A list of inventory sizes to be excluded. | [optional] 
**targeted_inventory_sizes** | [**List[AdSize]**](AdSize.md) | A list of inventory sizes to be included. | [optional] 

## Example

```python
from openapi_client.models.inventory_size_targeting import InventorySizeTargeting

# TODO update the JSON string below
json = "{}"
# create an instance of InventorySizeTargeting from a JSON string
inventory_size_targeting_instance = InventorySizeTargeting.from_json(json)
# print the JSON string representation of the object
print(InventorySizeTargeting.to_json())

# convert the object into a dict
inventory_size_targeting_dict = inventory_size_targeting_instance.to_dict()
# create an instance of InventorySizeTargeting from a dict
inventory_size_targeting_from_dict = InventorySizeTargeting.from_dict(inventory_size_targeting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


