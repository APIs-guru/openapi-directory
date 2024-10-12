# ShipmentPickUpRequest

Shipment pick up request details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **datetime** | Maximum date before which the pick up should commence, this must be in local time of pick up area. | 
**shipment_location** | **str** | Shipment Location in the pickup place. Eg.front desk | 
**start_time** | **datetime** | Minimum date after which the pick up should commence, this must be in local time of pick up area. | 

## Example

```python
from openapi_client.models.shipment_pick_up_request import ShipmentPickUpRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ShipmentPickUpRequest from a JSON string
shipment_pick_up_request_instance = ShipmentPickUpRequest.from_json(json)
# print the JSON string representation of the object
print(ShipmentPickUpRequest.to_json())

# convert the object into a dict
shipment_pick_up_request_dict = shipment_pick_up_request_instance.to_dict()
# create an instance of ShipmentPickUpRequest from a dict
shipment_pick_up_request_from_dict = ShipmentPickUpRequest.from_dict(shipment_pick_up_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


