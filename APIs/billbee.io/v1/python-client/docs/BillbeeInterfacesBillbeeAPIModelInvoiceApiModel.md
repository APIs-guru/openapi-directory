# BillbeeInterfacesBillbeeAPIModelInvoiceApiModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fees** | [**List[BillbeeInterfacesBillbeeAPIModelAdditionalFeeApiModel]**](BillbeeInterfacesBillbeeAPIModelAdditionalFeeApiModel.md) |  | [optional] 
**billbee_id** | **int** |  | [optional] 
**company** | **str** |  | [optional] 
**currency** | **str** |  | [optional] 
**customer_number** | **int** |  | [optional] 
**customer_vat_id** | **str** | The vat-id, that was given by the customer to fulfill this order | [optional] 
**debtor_number** | **int** |  | [optional] 
**email** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**invoice_date** | **datetime** |  | [optional] 
**invoice_number** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**merchant_vat_id** | **str** | The vat-id, that should be displayed on the invoice and other order documents | [optional] 
**order_number** | **str** |  | [optional] 
**pay_date** | **datetime** |  | [optional] 
**payment_type_id** | **int** |  | [optional] 
**positions** | [**List[BillbeeInterfacesBillbeeAPIModelInvoiceApiPositionApiModel]**](BillbeeInterfacesBillbeeAPIModelInvoiceApiPositionApiModel.md) |  | [optional] 
**salutation** | **str** |  | [optional] 
**shipping_country** | **str** | two letters for CountryCode Identification | [optional] 
**shop_name** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**total_gross** | **float** |  | [optional] 
**total_net** | **float** |  | [optional] 
**transaction_id** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**vat_flags** | [**BillbeeInterfacesOrderVatDetailsRecognizedHistoryEntryVatDetectionFlags**](BillbeeInterfacesOrderVatDetailsRecognizedHistoryEntryVatDetectionFlags.md) |  | [optional] 
**vat_mode** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.billbee_interfaces_billbee_api_model_invoice_api_model import BillbeeInterfacesBillbeeAPIModelInvoiceApiModel

# TODO update the JSON string below
json = "{}"
# create an instance of BillbeeInterfacesBillbeeAPIModelInvoiceApiModel from a JSON string
billbee_interfaces_billbee_api_model_invoice_api_model_instance = BillbeeInterfacesBillbeeAPIModelInvoiceApiModel.from_json(json)
# print the JSON string representation of the object
print(BillbeeInterfacesBillbeeAPIModelInvoiceApiModel.to_json())

# convert the object into a dict
billbee_interfaces_billbee_api_model_invoice_api_model_dict = billbee_interfaces_billbee_api_model_invoice_api_model_instance.to_dict()
# create an instance of BillbeeInterfacesBillbeeAPIModelInvoiceApiModel from a dict
billbee_interfaces_billbee_api_model_invoice_api_model_from_dict = BillbeeInterfacesBillbeeAPIModelInvoiceApiModel.from_dict(billbee_interfaces_billbee_api_model_invoice_api_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


