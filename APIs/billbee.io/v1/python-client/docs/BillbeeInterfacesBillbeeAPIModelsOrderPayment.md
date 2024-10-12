# BillbeeInterfacesBillbeeAPIModelsOrderPayment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billbee_id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**pay_date** | **datetime** |  | [optional] 
**pay_value** | **float** |  | [optional] 
**payment_type** | **int** |  | [optional] 
**purpose** | **str** |  | [optional] 
**source_technology** | **str** |  | [optional] 
**source_text** | **str** |  | [optional] 
**transaction_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.billbee_interfaces_billbee_api_models_order_payment import BillbeeInterfacesBillbeeAPIModelsOrderPayment

# TODO update the JSON string below
json = "{}"
# create an instance of BillbeeInterfacesBillbeeAPIModelsOrderPayment from a JSON string
billbee_interfaces_billbee_api_models_order_payment_instance = BillbeeInterfacesBillbeeAPIModelsOrderPayment.from_json(json)
# print the JSON string representation of the object
print(BillbeeInterfacesBillbeeAPIModelsOrderPayment.to_json())

# convert the object into a dict
billbee_interfaces_billbee_api_models_order_payment_dict = billbee_interfaces_billbee_api_models_order_payment_instance.to_dict()
# create an instance of BillbeeInterfacesBillbeeAPIModelsOrderPayment from a dict
billbee_interfaces_billbee_api_models_order_payment_from_dict = BillbeeInterfacesBillbeeAPIModelsOrderPayment.from_dict(billbee_interfaces_billbee_api_models_order_payment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


