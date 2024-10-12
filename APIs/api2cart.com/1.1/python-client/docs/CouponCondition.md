# CouponCondition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**entity** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**key** | **str** |  | [optional] 
**logic_operator** | **str** |  | [optional] 
**match_items** | **str** |  | [optional] 
**operator** | **str** |  | [optional] 
**sub_conditions** | [**List[CouponCondition]**](CouponCondition.md) |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.coupon_condition import CouponCondition

# TODO update the JSON string below
json = "{}"
# create an instance of CouponCondition from a JSON string
coupon_condition_instance = CouponCondition.from_json(json)
# print the JSON string representation of the object
print(CouponCondition.to_json())

# convert the object into a dict
coupon_condition_dict = coupon_condition_instance.to_dict()
# create an instance of CouponCondition from a dict
coupon_condition_from_dict = CouponCondition.from_dict(coupon_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


