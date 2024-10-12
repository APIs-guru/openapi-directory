# OrderAdd200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**OrderAdd200ResponseResult**](OrderAdd200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.order_add200_response import OrderAdd200Response

# TODO update the JSON string below
json = "{}"
# create an instance of OrderAdd200Response from a JSON string
order_add200_response_instance = OrderAdd200Response.from_json(json)
# print the JSON string representation of the object
print(OrderAdd200Response.to_json())

# convert the object into a dict
order_add200_response_dict = order_add200_response_instance.to_dict()
# create an instance of OrderAdd200Response from a dict
order_add200_response_from_dict = OrderAdd200Response.from_dict(order_add200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


