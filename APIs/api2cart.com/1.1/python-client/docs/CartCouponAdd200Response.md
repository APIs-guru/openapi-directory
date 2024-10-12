# CartCouponAdd200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**CartCouponAdd200ResponseResult**](CartCouponAdd200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.cart_coupon_add200_response import CartCouponAdd200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CartCouponAdd200Response from a JSON string
cart_coupon_add200_response_instance = CartCouponAdd200Response.from_json(json)
# print the JSON string representation of the object
print(CartCouponAdd200Response.to_json())

# convert the object into a dict
cart_coupon_add200_response_dict = cart_coupon_add200_response_instance.to_dict()
# create an instance of CartCouponAdd200Response from a dict
cart_coupon_add200_response_from_dict = CartCouponAdd200Response.from_dict(cart_coupon_add200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


