# OrderTendersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** |  | [optional] 
**buyer_tendered_cash_amount** | **int** | The amount (in cents) of cash tendered by the buyer. Only applicable when the tender type is cash. | [optional] 
**card** | [**PaymentCard**](PaymentCard.md) |  | [optional] 
**card_entry_method** | **str** | The entry method of the card. Only applicable when the tender type is card. | [optional] 
**card_status** | **str** | The status of the card. Only applicable when the tender type is card. | [optional] 
**change_back_cash_amount** | **int** | The amount (in cents) of cash returned to the buyer. Only applicable when the tender type is cash. | [optional] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**location_id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**name** | **str** |  | [optional] 
**note** | **str** |  | [optional] 
**payment_id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**percentage** | **float** |  | [optional] 
**total_amount** | **int** |  | [optional] 
**total_discount** | **int** |  | [optional] 
**total_processing_fee** | **int** |  | [optional] 
**total_refund** | **int** |  | [optional] 
**total_service_charge** | **int** |  | [optional] 
**total_tax** | **int** |  | [optional] 
**total_tip** | **int** |  | [optional] 
**transaction_id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.order_tenders_inner import OrderTendersInner

# TODO update the JSON string below
json = "{}"
# create an instance of OrderTendersInner from a JSON string
order_tenders_inner_instance = OrderTendersInner.from_json(json)
# print the JSON string representation of the object
print(OrderTendersInner.to_json())

# convert the object into a dict
order_tenders_inner_dict = order_tenders_inner_instance.to_dict()
# create an instance of OrderTendersInner from a dict
order_tenders_inner_from_dict = OrderTendersInner.from_dict(order_tenders_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


