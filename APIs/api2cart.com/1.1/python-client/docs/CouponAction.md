# CouponAction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**amount** | **float** |  | [optional] 
**apply_to** | **str** |  | [optional] 
**conditions** | [**List[CouponCondition]**](CouponCondition.md) |  | [optional] 
**currency_code** | **str** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**discount_quantity_step** | **int** |  | [optional] 
**discounted_quantity** | **float** |  | [optional] 
**include_tax** | **bool** |  | [optional] 
**logic_operator** | **str** |  | [optional] 
**scope** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.coupon_action import CouponAction

# TODO update the JSON string below
json = "{}"
# create an instance of CouponAction from a JSON string
coupon_action_instance = CouponAction.from_json(json)
# print the JSON string representation of the object
print(CouponAction.to_json())

# convert the object into a dict
coupon_action_dict = coupon_action_instance.to_dict()
# create an instance of CouponAction from a dict
coupon_action_from_dict = CouponAction.from_dict(coupon_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


