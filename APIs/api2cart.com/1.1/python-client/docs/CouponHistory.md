# CouponHistory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**amount** | **float** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**order_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.coupon_history import CouponHistory

# TODO update the JSON string below
json = "{}"
# create an instance of CouponHistory from a JSON string
coupon_history_instance = CouponHistory.from_json(json)
# print the JSON string representation of the object
print(CouponHistory.to_json())

# convert the object into a dict
coupon_history_dict = coupon_history_instance.to_dict()
# create an instance of CouponHistory from a dict
coupon_history_from_dict = CouponHistory.from_dict(coupon_history_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


