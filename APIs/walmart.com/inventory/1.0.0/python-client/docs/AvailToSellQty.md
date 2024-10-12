# AvailToSellQty

Quantity of an item that is available to be allocated to orders

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | Inventory Count | 
**unit** | **str** | The unit of measurement. Example: &#39;EACH&#39; | 

## Example

```python
from openapi_client.models.avail_to_sell_qty import AvailToSellQty

# TODO update the JSON string below
json = "{}"
# create an instance of AvailToSellQty from a JSON string
avail_to_sell_qty_instance = AvailToSellQty.from_json(json)
# print the JSON string representation of the object
print(AvailToSellQty.to_json())

# convert the object into a dict
avail_to_sell_qty_dict = avail_to_sell_qty_instance.to_dict()
# create an instance of AvailToSellQty from a dict
avail_to_sell_qty_from_dict = AvailToSellQty.from_dict(avail_to_sell_qty_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


