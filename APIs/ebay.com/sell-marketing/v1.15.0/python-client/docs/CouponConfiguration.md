# CouponConfiguration

This container defines a coded coupon promotion. It is required if the promotion type is CODED_COUPON.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**coupon_code** | **str** | A unique code that buyers can use during checkout to receive a discount. The code must be unique across eBay. &lt;br&gt;&lt;br&gt;The code must be from 8-15 alphanumeric characters and can contain no more than two dashes ( - ).&lt;br&gt;&lt;br&gt;This is required when the promotion type is CODED_COUPON. | [optional] 
**coupon_type** | **str** | This indicates the type of Coded Coupon promotion, and is required when the promotion type is &lt;b&gt;CODED_COUPON&lt;/b&gt;.&lt;br&gt;&lt;br&gt;Supported types:&lt;ul&gt;&lt;li&gt;&lt;b&gt;PRIVATE_SINGLE_SELLER_COUPON:&lt;/b&gt; Anyone can use and share the coupon code, but it isn&#39;t posted on eBay.&lt;/li&gt;&lt;li&gt;&lt;b&gt;PUBLIC_SINGLE_SELLER_COUPON:&lt;/b&gt; Anyone can find the coupon code on eBay and use it.&lt;/li&gt;&lt;/ul&gt; For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/sme:CouponTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**max_coupon_redemption_per_user** | **int** | This sets the limit on the number of times a buyer can use this coupon. The range of values is 1-10. If no value is provided, a buyer can use the coupon an unlimited number of times. | [optional] 

## Example

```python
from openapi_client.models.coupon_configuration import CouponConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of CouponConfiguration from a JSON string
coupon_configuration_instance = CouponConfiguration.from_json(json)
# print the JSON string representation of the object
print(CouponConfiguration.to_json())

# convert the object into a dict
coupon_configuration_dict = coupon_configuration_instance.to_dict()
# create an instance of CouponConfiguration from a dict
coupon_configuration_from_dict = CouponConfiguration.from_dict(coupon_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


