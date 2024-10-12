# Pricing


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cap_cost_type** | **str** | Cap cost type of this inventory item. | [optional] 
**end_date** | **date** |  | [optional] 
**flights** | [**List[Flight]**](Flight.md) | Flights of this inventory item. A flight (a.k.a. pricing period) represents the inventory item pricing information for a specific period of time. | [optional] 
**group_type** | **str** | Group type of this inventory item if it represents a placement group. Is null otherwise. There are two type of placement groups: PLANNING_PLACEMENT_GROUP_TYPE_PACKAGE is a simple group of inventory items that acts as a single pricing point for a group of tags. PLANNING_PLACEMENT_GROUP_TYPE_ROADBLOCK is a group of inventory items that not only acts as a single pricing point, but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned inventory items to be marked as primary. | [optional] 
**pricing_type** | **str** | Pricing type of this inventory item. | [optional] 
**start_date** | **date** |  | [optional] 

## Example

```python
from openapi_client.models.pricing import Pricing

# TODO update the JSON string below
json = "{}"
# create an instance of Pricing from a JSON string
pricing_instance = Pricing.from_json(json)
# print the JSON string representation of the object
print(Pricing.to_json())

# convert the object into a dict
pricing_dict = pricing_instance.to_dict()
# create an instance of Pricing from a dict
pricing_from_dict = Pricing.from_dict(pricing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


