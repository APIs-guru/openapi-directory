# OrdersRefundResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**execution_status** | **str** | The status of the execution. Acceptable values are: - \&quot;&#x60;duplicate&#x60;\&quot; - \&quot;&#x60;executed&#x60;\&quot;  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;content#ordersRefundResponse\&quot;. | [optional] 

## Example

```python
from openapi_client.models.orders_refund_response import OrdersRefundResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersRefundResponse from a JSON string
orders_refund_response_instance = OrdersRefundResponse.from_json(json)
# print the JSON string representation of the object
print(OrdersRefundResponse.to_json())

# convert the object into a dict
orders_refund_response_dict = orders_refund_response_instance.to_dict()
# create an instance of OrdersRefundResponse from a dict
orders_refund_response_from_dict = OrdersRefundResponse.from_dict(orders_refund_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


