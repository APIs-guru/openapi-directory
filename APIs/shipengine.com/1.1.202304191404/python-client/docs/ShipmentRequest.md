# ShipmentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipment** | [**AddressValidatingShipment**](AddressValidatingShipment.md) | The shipment object | [optional] 

## Example

```python
from openapi_client.models.shipment_request import ShipmentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ShipmentRequest from a JSON string
shipment_request_instance = ShipmentRequest.from_json(json)
# print the JSON string representation of the object
print(ShipmentRequest.to_json())

# convert the object into a dict
shipment_request_dict = shipment_request_instance.to_dict()
# create an instance of ShipmentRequest from a dict
shipment_request_from_dict = ShipmentRequest.from_dict(shipment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


