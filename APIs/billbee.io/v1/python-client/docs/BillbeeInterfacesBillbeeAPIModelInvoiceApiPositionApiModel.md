# BillbeeInterfacesBillbeeAPIModelInvoiceApiPositionApiModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** |  | [optional] 
**article_billbee_id** | **int** |  | [optional] 
**billbee_id** | **int** |  | [optional] 
**gross_value** | **float** |  | [optional] 
**net_value** | **float** |  | [optional] 
**position** | **int** |  | [optional] 
**rebate_percent** | **float** |  | [optional] 
**sku** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**total_gross_value** | **float** |  | [optional] 
**total_net_value** | **float** |  | [optional] 
**total_vat_amount** | **float** |  | [optional] 
**vat_rate** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.billbee_interfaces_billbee_api_model_invoice_api_position_api_model import BillbeeInterfacesBillbeeAPIModelInvoiceApiPositionApiModel

# TODO update the JSON string below
json = "{}"
# create an instance of BillbeeInterfacesBillbeeAPIModelInvoiceApiPositionApiModel from a JSON string
billbee_interfaces_billbee_api_model_invoice_api_position_api_model_instance = BillbeeInterfacesBillbeeAPIModelInvoiceApiPositionApiModel.from_json(json)
# print the JSON string representation of the object
print(BillbeeInterfacesBillbeeAPIModelInvoiceApiPositionApiModel.to_json())

# convert the object into a dict
billbee_interfaces_billbee_api_model_invoice_api_position_api_model_dict = billbee_interfaces_billbee_api_model_invoice_api_position_api_model_instance.to_dict()
# create an instance of BillbeeInterfacesBillbeeAPIModelInvoiceApiPositionApiModel from a dict
billbee_interfaces_billbee_api_model_invoice_api_position_api_model_from_dict = BillbeeInterfacesBillbeeAPIModelInvoiceApiPositionApiModel.from_dict(billbee_interfaces_billbee_api_model_invoice_api_position_api_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


