# Coupon


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**List[CouponAction]**](CouponAction.md) |  | [optional] 
**additional_fields** | **object** |  | [optional] 
**avail** | **bool** |  | [optional] 
**code** | **str** |  | [optional] 
**codes** | [**List[CouponCode]**](CouponCode.md) |  | [optional] 
**conditions** | [**List[CouponCondition]**](CouponCondition.md) |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**date_end** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**date_start** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**logic_operator** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**priority** | **int** |  | [optional] 
**usage_history** | [**List[CouponHistory]**](CouponHistory.md) |  | [optional] 
**usage_limit** | **int** |  | [optional] 
**usage_limit_per_customer** | **int** |  | [optional] 
**used_times** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.coupon import Coupon

# TODO update the JSON string below
json = "{}"
# create an instance of Coupon from a JSON string
coupon_instance = Coupon.from_json(json)
# print the JSON string representation of the object
print(Coupon.to_json())

# convert the object into a dict
coupon_dict = coupon_instance.to_dict()
# create an instance of Coupon from a dict
coupon_from_dict = Coupon.from_dict(coupon_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


