# ShipmentPickUpResponse

Shipment pick up response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confirmation_number** | **str** | Confirmation number for the pick up request. | [optional] [readonly] 
**ready_by_time** | **datetime** | Time by which shipment should be ready for pick up, this is in local time of pick up area. | [optional] [readonly] 

## Example

```python
from openapi_client.models.shipment_pick_up_response import ShipmentPickUpResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ShipmentPickUpResponse from a JSON string
shipment_pick_up_response_instance = ShipmentPickUpResponse.from_json(json)
# print the JSON string representation of the object
print(ShipmentPickUpResponse.to_json())

# convert the object into a dict
shipment_pick_up_response_dict = shipment_pick_up_response_instance.to_dict()
# create an instance of ShipmentPickUpResponse from a dict
shipment_pick_up_response_from_dict = ShipmentPickUpResponse.from_dict(shipment_pick_up_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


