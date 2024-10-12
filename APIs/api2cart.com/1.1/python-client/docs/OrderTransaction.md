# OrderTransaction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**amount** | **float** |  | [optional] 
**avs_message** | **str** |  | [optional] 
**avs_postal_resp_code** | **str** |  | [optional] 
**avs_street_resp_code** | **str** |  | [optional] 
**card_bin** | **str** |  | [optional] 
**card_brand** | **str** |  | [optional] 
**card_last_four** | **str** |  | [optional] 
**created_time** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**currency** | **str** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**cvv_code** | **str** |  | [optional] 
**cvv_message** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**gateway** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**is_test_mode** | **bool** |  | [optional] 
**order_id** | **str** |  | [optional] 
**parent_id** | **str** |  | [optional] 
**reference_number** | **str** |  | [optional] 
**settlement_amount** | **float** |  | [optional] 
**settlement_created_time** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**settlement_currency** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**transaction_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.order_transaction import OrderTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of OrderTransaction from a JSON string
order_transaction_instance = OrderTransaction.from_json(json)
# print the JSON string representation of the object
print(OrderTransaction.to_json())

# convert the object into a dict
order_transaction_dict = order_transaction_instance.to_dict()
# create an instance of OrderTransaction from a dict
order_transaction_from_dict = OrderTransaction.from_dict(order_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


