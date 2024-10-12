# Order


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**closed_date** | **date** |  | [optional] 
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**created_by** | **str** | The user who created the object. | [optional] [readonly] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**customer_id** | **str** |  | [optional] 
**customers** | [**List[OrderCustomersInner]**](OrderCustomersInner.md) |  | [optional] 
**discounts** | [**List[OrderDiscountsInner]**](OrderDiscountsInner.md) |  | [optional] 
**employee_id** | **str** |  | [optional] 
**fulfillments** | [**List[OrderFulfillmentsInner]**](OrderFulfillmentsInner.md) |  | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**idempotency_key** | **str** | A value you specify that uniquely identifies this request among requests you have sent. | [optional] 
**line_items** | [**List[OrderLineItemsInner]**](OrderLineItemsInner.md) |  | [optional] 
**location_id** | **str** |  | 
**merchant_id** | **str** |  | 
**note** | **str** | A note with information about this order, may be printed on the order receipt and displayed in apps | [optional] 
**order_date** | **date** |  | [optional] 
**order_number** | **str** |  | [optional] 
**order_type_id** | **str** |  | [optional] 
**payment_status** | **str** | Is this order paid or not? | [optional] 
**payments** | [**List[OrderPaymentsInner]**](OrderPaymentsInner.md) |  | [optional] 
**reference_id** | **str** | An optional user-defined reference ID that associates this record with another entity in an external system. For example, a customer ID from an external customer management system. | [optional] 
**refunded** | **bool** |  | [optional] 
**refunds** | [**List[OrderRefundsInner]**](OrderRefundsInner.md) |  | [optional] 
**seat** | **str** |  | [optional] 
**service_charges** | [**List[ServiceCharge]**](ServiceCharge.md) | Optional service charges or gratuity tip applied to the order. | [optional] 
**source** | **str** | Source of order. Indicates the way that the order was placed. | [optional] [readonly] 
**status** | **str** | Order status. Clover specific: If no value is set, the status defaults to hidden, which indicates a hidden order. A hidden order is not displayed in user interfaces and can only be retrieved by its id. When creating an order via the REST API the value must be manually set to &#39;open&#39;. More info [https://docs.clover.com/reference/orderupdateorder]() | [optional] 
**table** | **str** |  | [optional] 
**taxes** | [**List[OrderTaxesInner]**](OrderTaxesInner.md) |  | [optional] 
**tenders** | [**List[OrderTendersInner]**](OrderTendersInner.md) |  | [optional] 
**title** | **str** |  | [optional] 
**total_amount** | **int** |  | [optional] 
**total_discount** | **int** |  | [optional] 
**total_refund** | **int** |  | [optional] 
**total_service_charge** | **int** |  | [optional] 
**total_tax** | **int** |  | [optional] 
**total_tip** | **int** |  | [optional] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 
**updated_by** | **str** | The user who last updated the object. | [optional] [readonly] 
**version** | **str** |  | [optional] 
**voided** | **bool** |  | [optional] 
**voided_at** | **datetime** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.order import Order

# TODO update the JSON string below
json = "{}"
# create an instance of Order from a JSON string
order_instance = Order.from_json(json)
# print the JSON string representation of the object
print(Order.to_json())

# convert the object into a dict
order_dict = order_instance.to_dict()
# create an instance of Order from a dict
order_from_dict = Order.from_dict(order_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


