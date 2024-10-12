# ShipNodes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avail_to_sell_qty** | **int** | The available quantity is the quantity of an item that is available to be allocated to orders. | [optional] 
**modified_date** | **str** | Last changes date for the item. | [optional] 
**on_hand_qty** | **int** | The on-hand balance is the quantity of active inventory stored at the warehouse.Active inventory is defined as the usable amount of an item that is in the warehouse.Inventory is active if it is not damaged, expired or being inspected. | [optional] 
**ship_node_type** | **str** | Identifies fulfillment aspect of invetory. Walmart, seller or 3PL fulfilled. Possible value is &#39;WFSFulfilled&#39;. In later phase we will also add seller fulfilled inventory. | [optional] 

## Example

```python
from openapi_client.models.ship_nodes import ShipNodes

# TODO update the JSON string below
json = "{}"
# create an instance of ShipNodes from a JSON string
ship_nodes_instance = ShipNodes.from_json(json)
# print the JSON string representation of the object
print(ShipNodes.to_json())

# convert the object into a dict
ship_nodes_dict = ship_nodes_instance.to_dict()
# create an instance of ShipNodes from a dict
ship_nodes_from_dict = ShipNodes.from_dict(ship_nodes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


