# BasketLiveShippingServiceCreate200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**BasketLiveShippingServiceCreate200ResponseResult**](BasketLiveShippingServiceCreate200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.basket_live_shipping_service_create200_response import BasketLiveShippingServiceCreate200Response

# TODO update the JSON string below
json = "{}"
# create an instance of BasketLiveShippingServiceCreate200Response from a JSON string
basket_live_shipping_service_create200_response_instance = BasketLiveShippingServiceCreate200Response.from_json(json)
# print the JSON string representation of the object
print(BasketLiveShippingServiceCreate200Response.to_json())

# convert the object into a dict
basket_live_shipping_service_create200_response_dict = basket_live_shipping_service_create200_response_instance.to_dict()
# create an instance of BasketLiveShippingServiceCreate200Response from a dict
basket_live_shipping_service_create200_response_from_dict = BasketLiveShippingServiceCreate200Response.from_dict(basket_live_shipping_service_create200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


