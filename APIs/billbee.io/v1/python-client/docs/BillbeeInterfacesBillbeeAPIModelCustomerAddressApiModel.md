# BillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel

Container for passing address data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_addition** | **str** |  | [optional] 
**address_type** | **int** | The type of the address | [optional] 
**archived_at** | **datetime** | If set, the customeraddress was already archived at the given date. Further modification is disabled. | [optional] 
**city** | **str** |  | [optional] 
**company** | **str** | The name of the company | [optional] 
**country_code** | **str** | The ISO2 code of the country | [optional] 
**customer_id** | **int** | The internal Billbee id of the customer the address belongs to | [optional] 
**email** | **str** |  | [optional] 
**fax** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**housenumber** | **str** |  | [optional] 
**id** | **int** | The internal Billbee ID of the address record. Can be null if a new address is created | [optional] 
**last_name** | **str** |  | [optional] 
**name2** | **str** | Optionally an additional name field | [optional] 
**restored_at** | **datetime** | If set, the customeraddress was restored from the archive at the given date. | [optional] 
**state** | **str** |  | [optional] 
**street** | **str** |  | [optional] 
**tel1** | **str** |  | [optional] 
**tel2** | **str** |  | [optional] 
**zip** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.billbee_interfaces_billbee_api_model_customer_address_api_model import BillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel

# TODO update the JSON string below
json = "{}"
# create an instance of BillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel from a JSON string
billbee_interfaces_billbee_api_model_customer_address_api_model_instance = BillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel.from_json(json)
# print the JSON string representation of the object
print(BillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel.to_json())

# convert the object into a dict
billbee_interfaces_billbee_api_model_customer_address_api_model_dict = billbee_interfaces_billbee_api_model_customer_address_api_model_instance.to_dict()
# create an instance of BillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel from a dict
billbee_interfaces_billbee_api_model_customer_address_api_model_from_dict = BillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel.from_dict(billbee_interfaces_billbee_api_model_customer_address_api_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


