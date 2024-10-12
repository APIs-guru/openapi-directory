# BillbeeInterfacesBillbeeAPIModelShipmentAddressApiModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_addition** | **str** |  | [optional] 
**city** | **str** |  | [optional] 
**company** | **str** |  | [optional] 
**country_code** | **str** |  | [optional] 
**country_code_iso3** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**full_name** | **str** |  | [optional] [readonly] 
**full_street** | **str** |  | [optional] [readonly] 
**housenumber** | **str** |  | [optional] 
**is_export_country** | **bool** |  | [optional] 
**last_name** | **str** |  | [optional] 
**name2** | **str** |  | [optional] 
**state** | **str** |  | [optional] 
**street** | **str** |  | [optional] 
**telephone** | **str** |  | [optional] 
**zip** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.billbee_interfaces_billbee_api_model_shipment_address_api_model import BillbeeInterfacesBillbeeAPIModelShipmentAddressApiModel

# TODO update the JSON string below
json = "{}"
# create an instance of BillbeeInterfacesBillbeeAPIModelShipmentAddressApiModel from a JSON string
billbee_interfaces_billbee_api_model_shipment_address_api_model_instance = BillbeeInterfacesBillbeeAPIModelShipmentAddressApiModel.from_json(json)
# print the JSON string representation of the object
print(BillbeeInterfacesBillbeeAPIModelShipmentAddressApiModel.to_json())

# convert the object into a dict
billbee_interfaces_billbee_api_model_shipment_address_api_model_dict = billbee_interfaces_billbee_api_model_shipment_address_api_model_instance.to_dict()
# create an instance of BillbeeInterfacesBillbeeAPIModelShipmentAddressApiModel from a dict
billbee_interfaces_billbee_api_model_shipment_address_api_model_from_dict = BillbeeInterfacesBillbeeAPIModelShipmentAddressApiModel.from_dict(billbee_interfaces_billbee_api_model_shipment_address_api_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


