# OrderRefundAdd200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**OrderRefundAdd200ResponseResult**](OrderRefundAdd200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.order_refund_add200_response import OrderRefundAdd200Response

# TODO update the JSON string below
json = "{}"
# create an instance of OrderRefundAdd200Response from a JSON string
order_refund_add200_response_instance = OrderRefundAdd200Response.from_json(json)
# print the JSON string representation of the object
print(OrderRefundAdd200Response.to_json())

# convert the object into a dict
order_refund_add200_response_dict = order_refund_add200_response_instance.to_dict()
# create an instance of OrderRefundAdd200Response from a dict
order_refund_add200_response_from_dict = OrderRefundAdd200Response.from_dict(order_refund_add200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


