# BillbeeInterfacesBillbeeAPIModelShipment

Represents a single shipment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billbee_id** | **int** | The billbee internal id of the shipment | [optional] 
**created** | **datetime** | The creation date | [optional] 
**shipment_type** | **int** | Shipment Type, 0 if Shipment, 1 if Retoure | [optional] 
**shipper** | **str** | The name of the shipping provider | [optional] 
**shipping_carrier** | **int** | The carrier used to ship the parcel with | [optional] 
**shipping_id** | **str** | The id of this shipment | [optional] 
**shipping_provider_id** | **int** | The id of the used shipping provider | [optional] 
**shipping_provider_product_id** | **int** | The id of the used shipping provider product | [optional] 
**tracking_url** | **str** | The url to track this shipment | [optional] 

## Example

```python
from openapi_client.models.billbee_interfaces_billbee_api_model_shipment import BillbeeInterfacesBillbeeAPIModelShipment

# TODO update the JSON string below
json = "{}"
# create an instance of BillbeeInterfacesBillbeeAPIModelShipment from a JSON string
billbee_interfaces_billbee_api_model_shipment_instance = BillbeeInterfacesBillbeeAPIModelShipment.from_json(json)
# print the JSON string representation of the object
print(BillbeeInterfacesBillbeeAPIModelShipment.to_json())

# convert the object into a dict
billbee_interfaces_billbee_api_model_shipment_dict = billbee_interfaces_billbee_api_model_shipment_instance.to_dict()
# create an instance of BillbeeInterfacesBillbeeAPIModelShipment from a dict
billbee_interfaces_billbee_api_model_shipment_from_dict = BillbeeInterfacesBillbeeAPIModelShipment.from_dict(billbee_interfaces_billbee_api_model_shipment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


