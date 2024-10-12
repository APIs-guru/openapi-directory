# OrderFulfillmentStatusList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**OrderFulfillmentStatusList200ResponseResult**](OrderFulfillmentStatusList200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.order_fulfillment_status_list200_response import OrderFulfillmentStatusList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of OrderFulfillmentStatusList200Response from a JSON string
order_fulfillment_status_list200_response_instance = OrderFulfillmentStatusList200Response.from_json(json)
# print the JSON string representation of the object
print(OrderFulfillmentStatusList200Response.to_json())

# convert the object into a dict
order_fulfillment_status_list200_response_dict = order_fulfillment_status_list200_response_instance.to_dict()
# create an instance of OrderFulfillmentStatusList200Response from a dict
order_fulfillment_status_list200_response_from_dict = OrderFulfillmentStatusList200Response.from_dict(order_fulfillment_status_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


