# CouponCode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**code** | **str** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**id** | **str** |  | [optional] 
**used_times** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.coupon_code import CouponCode

# TODO update the JSON string below
json = "{}"
# create an instance of CouponCode from a JSON string
coupon_code_instance = CouponCode.from_json(json)
# print the JSON string representation of the object
print(CouponCode.to_json())

# convert the object into a dict
coupon_code_dict = coupon_code_instance.to_dict()
# create an instance of CouponCode from a dict
coupon_code_from_dict = CouponCode.from_dict(coupon_code_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


