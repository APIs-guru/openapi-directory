# Warehouse

A fulfillment warehouse, which stores and handles inventory.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**business_day_config** | [**BusinessDayConfig**](BusinessDayConfig.md) |  | [optional] 
**cutoff_time** | [**WarehouseCutoffTime**](WarehouseCutoffTime.md) |  | [optional] 
**handling_days** | **str** | Required. The number of days it takes for this warehouse to pack up and ship an item. This is on the warehouse level, but can be overridden on the offer level based on the attributes of an item. | [optional] 
**name** | **str** | Required. The name of the warehouse. Must be unique within account. | [optional] 
**shipping_address** | [**Address**](Address.md) |  | [optional] 

## Example

```python
from openapi_client.models.warehouse import Warehouse

# TODO update the JSON string below
json = "{}"
# create an instance of Warehouse from a JSON string
warehouse_instance = Warehouse.from_json(json)
# print the JSON string representation of the object
print(Warehouse.to_json())

# convert the object into a dict
warehouse_dict = warehouse_instance.to_dict()
# create an instance of Warehouse from a dict
warehouse_from_dict = Warehouse.from_dict(warehouse_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


