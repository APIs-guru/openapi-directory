# ResponseCartCouponListResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**coupon** | [**List[Coupon]**](Coupon.md) |  | [optional] 
**coupon_count** | **int** |  | [optional] 
**custom_fields** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.response_cart_coupon_list_result import ResponseCartCouponListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseCartCouponListResult from a JSON string
response_cart_coupon_list_result_instance = ResponseCartCouponListResult.from_json(json)
# print the JSON string representation of the object
print(ResponseCartCouponListResult.to_json())

# convert the object into a dict
response_cart_coupon_list_result_dict = response_cart_coupon_list_result_instance.to_dict()
# create an instance of ResponseCartCouponListResult from a dict
response_cart_coupon_list_result_from_dict = ResponseCartCouponListResult.from_dict(response_cart_coupon_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


