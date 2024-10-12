# BillbeeInterfacesBillbeeAPIModelUpdateStockResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_stock** | **float** | The new value for current stock after the update | [optional] 
**message** | **str** | A human readable message that explains the result of the operation | [optional] 
**old_stock** | **float** | The old value for current stock before the update | [optional] 
**sku** | **str** | The SKU of the article to update the current stock | [optional] 
**unfulfilled_amount** | **float** | The value of the unfulfilled amount (reserved) of the article | [optional] 

## Example

```python
from openapi_client.models.billbee_interfaces_billbee_api_model_update_stock_response_data import BillbeeInterfacesBillbeeAPIModelUpdateStockResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of BillbeeInterfacesBillbeeAPIModelUpdateStockResponseData from a JSON string
billbee_interfaces_billbee_api_model_update_stock_response_data_instance = BillbeeInterfacesBillbeeAPIModelUpdateStockResponseData.from_json(json)
# print the JSON string representation of the object
print(BillbeeInterfacesBillbeeAPIModelUpdateStockResponseData.to_json())

# convert the object into a dict
billbee_interfaces_billbee_api_model_update_stock_response_data_dict = billbee_interfaces_billbee_api_model_update_stock_response_data_instance.to_dict()
# create an instance of BillbeeInterfacesBillbeeAPIModelUpdateStockResponseData from a dict
billbee_interfaces_billbee_api_model_update_stock_response_data_from_dict = BillbeeInterfacesBillbeeAPIModelUpdateStockResponseData.from_dict(billbee_interfaces_billbee_api_model_update_stock_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


