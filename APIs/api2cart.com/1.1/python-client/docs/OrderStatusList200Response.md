# OrderStatusList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**OrderStatusList200ResponseResult**](OrderStatusList200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.order_status_list200_response import OrderStatusList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of OrderStatusList200Response from a JSON string
order_status_list200_response_instance = OrderStatusList200Response.from_json(json)
# print the JSON string representation of the object
print(OrderStatusList200Response.to_json())

# convert the object into a dict
order_status_list200_response_dict = order_status_list200_response_instance.to_dict()
# create an instance of OrderStatusList200Response from a dict
order_status_list200_response_from_dict = OrderStatusList200Response.from_dict(order_status_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


