# ShipmentIdRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipment_id** | **str** | A string that uniquely identifies the shipment | [optional] 

## Example

```python
from openapi_client.models.shipment_id_request import ShipmentIdRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ShipmentIdRequest from a JSON string
shipment_id_request_instance = ShipmentIdRequest.from_json(json)
# print the JSON string representation of the object
print(ShipmentIdRequest.to_json())

# convert the object into a dict
shipment_id_request_dict = shipment_id_request_instance.to_dict()
# create an instance of ShipmentIdRequest from a dict
shipment_id_request_from_dict = ShipmentIdRequest.from_dict(shipment_id_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


