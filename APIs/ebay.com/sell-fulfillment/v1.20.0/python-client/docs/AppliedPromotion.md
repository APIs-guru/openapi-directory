# AppliedPromotion

This type contains information about a sales promotion that is applied to a line item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A description of the applied sales promotion. | [optional] 
**discount_amount** | [**Amount**](Amount.md) |  | [optional] 
**promotion_id** | **str** | An eBay-generated unique identifier of the sales promotion.&lt;br&gt;&lt;br&gt; Multiple types of sales promotions are available to eBay Store owners, including order size/volume discounts, shipping discounts, special coupons, and price markdowns. Sales promotions can be managed through the Marketing tab of Seller Hub in My eBay, or by using the Trading API&#39;s &lt;b&gt;SetPromotionalSale&lt;/b&gt; call or the Marketing API&#39;s &lt;b&gt;createItemPromotion&lt;/b&gt; method. | [optional] 

## Example

```python
from openapi_client.models.applied_promotion import AppliedPromotion

# TODO update the JSON string below
json = "{}"
# create an instance of AppliedPromotion from a JSON string
applied_promotion_instance = AppliedPromotion.from_json(json)
# print the JSON string representation of the object
print(AppliedPromotion.to_json())

# convert the object into a dict
applied_promotion_dict = applied_promotion_instance.to_dict()
# create an instance of AppliedPromotion from a dict
applied_promotion_from_dict = AppliedPromotion.from_dict(applied_promotion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


