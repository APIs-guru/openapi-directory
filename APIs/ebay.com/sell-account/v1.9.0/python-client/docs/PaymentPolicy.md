# PaymentPolicy

This type is used by the <b>paymentPolicy</b> response container, a container which defines a seller's payment business policy for a specific marketplace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_types** | [**List[CategoryType]**](CategoryType.md) | This container indicates whether the fulfillment policy applies to motor vehicle listings, or if it applies to non-motor vehicle listings. | [optional] 
**deposit** | [**Deposit**](Deposit.md) |  | [optional] 
**description** | **str** | A seller-defined description of the payment policy. This description is only for the seller&#39;s use, and is not exposed on any eBay pages.  &lt;br/&gt;&lt;br/&gt;&lt;b&gt;Max length&lt;/b&gt;: 250 | [optional] 
**full_payment_due_in** | [**TimeDuration**](TimeDuration.md) |  | [optional] 
**immediate_pay** | **bool** | If this field is returned as &lt;code&gt;true&lt;/code&gt;, immediate payment is required from the buyer for: &lt;ul&gt;&lt;li&gt;A fixed-price item&lt;/li&gt;&lt;li&gt;An auction item where the buyer uses the &#39;Buy it Now&#39; option&lt;/li&gt;&lt;li&gt;A deposit for a motor vehicle listing&lt;/li&gt;&lt;/ul&gt;&lt;br /&gt;It is possible for the seller to set this field as &lt;code&gt;true&lt;/code&gt; in the payment business policy, but it will not apply in some scenarios. For example, immediate payment is not applicable for auction listings that have a winning bidder, for buyer purchases that involve the Best Offer feature, or for transactions that happen offline between the buyer and seller. | [optional] 
**marketplace_id** | **str** | The ID of the eBay marketplace to which the payment business policy applies. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**name** | **str** | A seller-defined name for this fulfillment policy. Names must be unique for policies assigned to the same marketplace. &lt;br/&gt;&lt;br/&gt;&lt;b&gt;Max length&lt;/b&gt;: 64 | [optional] 
**payment_instructions** | **str** | Although this field may be returned for some older payment business policies, payment instructions are no longer supported by payment business policies. If this field is returned, it can be ignored and these payment instructions will not appear in any listings that use the corresponding business policy. &lt;br/&gt;&lt;br/&gt;&lt;b&gt;Max length&lt;/b&gt;: 1000 | [optional] 
**payment_methods** | [**List[PaymentMethod]**](PaymentMethod.md) | This container is returned to show the payment methods that are accepted for the payment business policy.  &lt;br&gt;&lt;br&gt;Sellers do not have to specify any electronic payment methods for listings, so this array will often be returned empty unless the payment business policy is intended for motor vehicle listings or other items in categories where offline payments are required or supported.  | [optional] 
**payment_policy_id** | **str** | A unique eBay-assigned ID for a payment business policy. This ID is generated when the policy is created. | [optional] 

## Example

```python
from openapi_client.models.payment_policy import PaymentPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentPolicy from a JSON string
payment_policy_instance = PaymentPolicy.from_json(json)
# print the JSON string representation of the object
print(PaymentPolicy.to_json())

# convert the object into a dict
payment_policy_dict = payment_policy_instance.to_dict()
# create an instance of PaymentPolicy from a dict
payment_policy_from_dict = PaymentPolicy.from_dict(payment_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


