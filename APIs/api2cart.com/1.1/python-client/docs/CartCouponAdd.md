# CartCouponAdd


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_amount** | **float** | Defines the discount amount value. | 
**action_apply_to** | **str** | Defines where discount should be applied | 
**action_condition_entity** | **str** | Defines entity for action condition. | [optional] 
**action_condition_key** | **str** | Defines entity attribute code for action condition. | [optional] 
**action_condition_operator** | **str** | Defines condition operator. | [optional] 
**action_condition_value** | **str** | Defines condition attribute value/s. Can be comma separated string. | [optional] 
**action_scope** | **str** | Specify how discount should be applied. If scope&#x3D;matching_items, then discount will be applied to each of the items that match action conditions. Scope order means that discount will be applied once. | 
**action_type** | **str** | Coupon discount type | 
**code** | **str** | Coupon code | 
**codes** | **List[str]** | Entity codes | [optional] 
**date_end** | **str** | Defines when discount code will be expired. | [optional] 
**date_start** | **str** | Defines when discount code will be available. | [optional] [default to 'now']
**name** | **str** | Coupon name | [optional] 
**store_id** | **str** | Store Id | [optional] 
**usage_limit** | **int** | Usage limit for coupon. | [optional] 
**usage_limit_per_customer** | **int** | Usage limit per customer. | [optional] 

## Example

```python
from openapi_client.models.cart_coupon_add import CartCouponAdd

# TODO update the JSON string below
json = "{}"
# create an instance of CartCouponAdd from a JSON string
cart_coupon_add_instance = CartCouponAdd.from_json(json)
# print the JSON string representation of the object
print(CartCouponAdd.to_json())

# convert the object into a dict
cart_coupon_add_dict = cart_coupon_add_instance.to_dict()
# create an instance of CartCouponAdd from a dict
cart_coupon_add_from_dict = CartCouponAdd.from_dict(cart_coupon_add_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


