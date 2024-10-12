# BillbeeInterfacesBillbeeAPIModelUpdateStockApiModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autosubtract_reserved_amount** | **bool** | Automatically reduce the NewQuantity by the currently not fulfilled amount | [optional] 
**billbee_id** | **int** | Optional the ID of the Billbee product to update | [optional] 
**delta_quantity** | **float** | This parameter is currently ignored | [optional] 
**force_send_stock_to_shops** | **bool** | If true, every sent stockchange is stored and transmitted to the connected shop, even if the value has not changed | [optional] 
**new_quantity** | **float** | The new absolute stock quantity for the product you want to set | [optional] 
**old_quantity** | **float** | This parameter is currently ignored | [optional] 
**reason** | **str** | Optional a reason text for the stock update | [optional] 
**sku** | **str** | The SKU of the product to update | [optional] 
**stock_id** | **int** | Optional the stock id if the feature multi stock is activated | [optional] 

## Example

```python
from openapi_client.models.billbee_interfaces_billbee_api_model_update_stock_api_model import BillbeeInterfacesBillbeeAPIModelUpdateStockApiModel

# TODO update the JSON string below
json = "{}"
# create an instance of BillbeeInterfacesBillbeeAPIModelUpdateStockApiModel from a JSON string
billbee_interfaces_billbee_api_model_update_stock_api_model_instance = BillbeeInterfacesBillbeeAPIModelUpdateStockApiModel.from_json(json)
# print the JSON string representation of the object
print(BillbeeInterfacesBillbeeAPIModelUpdateStockApiModel.to_json())

# convert the object into a dict
billbee_interfaces_billbee_api_model_update_stock_api_model_dict = billbee_interfaces_billbee_api_model_update_stock_api_model_instance.to_dict()
# create an instance of BillbeeInterfacesBillbeeAPIModelUpdateStockApiModel from a dict
billbee_interfaces_billbee_api_model_update_stock_api_model_from_dict = BillbeeInterfacesBillbeeAPIModelUpdateStockApiModel.from_dict(billbee_interfaces_billbee_api_model_update_stock_api_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


