# InventoryTypeTargeting

Targeting of the inventory types a bid request can originate from.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inventory_types** | **List[str]** | The list of targeted inventory types for the bid request. | [optional] 

## Example

```python
from openapi_client.models.inventory_type_targeting import InventoryTypeTargeting

# TODO update the JSON string below
json = "{}"
# create an instance of InventoryTypeTargeting from a JSON string
inventory_type_targeting_instance = InventoryTypeTargeting.from_json(json)
# print the JSON string representation of the object
print(InventoryTypeTargeting.to_json())

# convert the object into a dict
inventory_type_targeting_dict = inventory_type_targeting_instance.to_dict()
# create an instance of InventoryTypeTargeting from a dict
inventory_type_targeting_from_dict = InventoryTypeTargeting.from_dict(inventory_type_targeting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


