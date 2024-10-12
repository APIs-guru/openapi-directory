# Shipment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**created_at** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**id** | **str** |  | [optional] 
**is_shipped** | **bool** |  | [optional] 
**items** | [**List[ShipmentItem]**](ShipmentItem.md) |  | [optional] 
**modified_time** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**order_id** | **str** |  | [optional] 
**shipment_provider** | **str** |  | [optional] 
**tracking_numbers** | [**List[ShipmentTrackingNumber]**](ShipmentTrackingNumber.md) |  | [optional] 
**warehouse_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.shipment import Shipment

# TODO update the JSON string below
json = "{}"
# create an instance of Shipment from a JSON string
shipment_instance = Shipment.from_json(json)
# print the JSON string representation of the object
print(Shipment.to_json())

# convert the object into a dict
shipment_dict = shipment_instance.to_dict()
# create an instance of Shipment from a dict
shipment_from_dict = Shipment.from_dict(shipment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


