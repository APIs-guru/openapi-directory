# BillbeeInterfacesBillbeeAPIModelOrderAddressApiModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billbee_id** | **int** |  | [optional] 
**city** | **str** |  | [optional] 
**company** | **str** |  | [optional] 
**country** | **str** |  | [optional] 
**country_iso2** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**house_number** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**line2** | **str** |  | [optional] 
**name_addition** | **str** |  | [optional] 
**phone** | **str** |  | [optional] 
**state** | **str** |  | [optional] 
**street** | **str** |  | [optional] 
**zip** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.billbee_interfaces_billbee_api_model_order_address_api_model import BillbeeInterfacesBillbeeAPIModelOrderAddressApiModel

# TODO update the JSON string below
json = "{}"
# create an instance of BillbeeInterfacesBillbeeAPIModelOrderAddressApiModel from a JSON string
billbee_interfaces_billbee_api_model_order_address_api_model_instance = BillbeeInterfacesBillbeeAPIModelOrderAddressApiModel.from_json(json)
# print the JSON string representation of the object
print(BillbeeInterfacesBillbeeAPIModelOrderAddressApiModel.to_json())

# convert the object into a dict
billbee_interfaces_billbee_api_model_order_address_api_model_dict = billbee_interfaces_billbee_api_model_order_address_api_model_instance.to_dict()
# create an instance of BillbeeInterfacesBillbeeAPIModelOrderAddressApiModel from a dict
billbee_interfaces_billbee_api_model_order_address_api_model_from_dict = BillbeeInterfacesBillbeeAPIModelOrderAddressApiModel.from_dict(billbee_interfaces_billbee_api_model_order_address_api_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


