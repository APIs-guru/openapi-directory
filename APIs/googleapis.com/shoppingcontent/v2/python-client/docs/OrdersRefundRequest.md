# OrdersRefundRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**Price**](Price.md) |  | [optional] 
**amount_pretax** | [**Price**](Price.md) |  | [optional] 
**amount_tax** | [**Price**](Price.md) |  | [optional] 
**operation_id** | **str** | The ID of the operation. Unique across all operations for a given order. | [optional] 
**reason** | **str** | The reason for the refund. Acceptable values are: - \&quot;&#x60;adjustment&#x60;\&quot; - \&quot;&#x60;courtesyAdjustment&#x60;\&quot; - \&quot;&#x60;customerCanceled&#x60;\&quot; - \&quot;&#x60;customerDiscretionaryReturn&#x60;\&quot; - \&quot;&#x60;deliveredLateByCarrier&#x60;\&quot; - \&quot;&#x60;feeAdjustment&#x60;\&quot; - \&quot;&#x60;lateShipmentCredit&#x60;\&quot; - \&quot;&#x60;noInventory&#x60;\&quot; - \&quot;&#x60;other&#x60;\&quot; - \&quot;&#x60;priceError&#x60;\&quot; - \&quot;&#x60;productArrivedDamaged&#x60;\&quot; - \&quot;&#x60;productNotAsDescribed&#x60;\&quot; - \&quot;&#x60;shippingCostAdjustment&#x60;\&quot; - \&quot;&#x60;taxAdjustment&#x60;\&quot; - \&quot;&#x60;undeliverableShippingAddress&#x60;\&quot; - \&quot;&#x60;wrongProductShipped&#x60;\&quot;  | [optional] 
**reason_text** | **str** | The explanation of the reason. | [optional] 

## Example

```python
from openapi_client.models.orders_refund_request import OrdersRefundRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersRefundRequest from a JSON string
orders_refund_request_instance = OrdersRefundRequest.from_json(json)
# print the JSON string representation of the object
print(OrdersRefundRequest.to_json())

# convert the object into a dict
orders_refund_request_dict = orders_refund_request_instance.to_dict()
# create an instance of OrdersRefundRequest from a dict
orders_refund_request_from_dict = OrdersRefundRequest.from_dict(orders_refund_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


