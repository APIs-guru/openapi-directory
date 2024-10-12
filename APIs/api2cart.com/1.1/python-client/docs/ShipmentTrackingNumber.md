# ShipmentTrackingNumber


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**carrier_id** | **str** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**tracking_number** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.shipment_tracking_number import ShipmentTrackingNumber

# TODO update the JSON string below
json = "{}"
# create an instance of ShipmentTrackingNumber from a JSON string
shipment_tracking_number_instance = ShipmentTrackingNumber.from_json(json)
# print the JSON string representation of the object
print(ShipmentTrackingNumber.to_json())

# convert the object into a dict
shipment_tracking_number_dict = shipment_tracking_number_instance.to_dict()
# create an instance of ShipmentTrackingNumber from a dict
shipment_tracking_number_from_dict = ShipmentTrackingNumber.from_dict(shipment_tracking_number_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


