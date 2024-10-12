# AvailableCoupon


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**constraint** | **str** | The limitations or restrictions of the coupon. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/buy/browse/types/gct:CouponConstraint&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**discount_amount** | [**Amount**](Amount.md) |  | [optional] 
**discount_type** | **str** | The type of discount that the coupon applies. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/buy/browse/types/gct:CouponDiscountType&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**message** | **str** | A description of the coupon. Note: The value returned in the termsWebUrl field should appear for all experiences when displaying coupons. The value in the availableCoupons.message field must also be included, if returned in the API response. | [optional] 
**redemption_code** | **str** | The coupon code. | [optional] 
**terms_web_url** | **str** | The URL to the coupon terms of use. Note: The value returned in the termsWebUrl field should appear for all experiences when displaying coupons. The value in the availableCoupons.message field must also be included, if returned in the API response. | [optional] 

## Example

```python
from openapi_client.models.available_coupon import AvailableCoupon

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableCoupon from a JSON string
available_coupon_instance = AvailableCoupon.from_json(json)
# print the JSON string representation of the object
print(AvailableCoupon.to_json())

# convert the object into a dict
available_coupon_dict = available_coupon_instance.to_dict()
# create an instance of AvailableCoupon from a dict
available_coupon_from_dict = AvailableCoupon.from_dict(available_coupon_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


