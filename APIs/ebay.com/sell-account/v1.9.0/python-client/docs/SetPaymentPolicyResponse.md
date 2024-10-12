# SetPaymentPolicyResponse

Complex type that that gets populated with a response containing a payment policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_types** | [**List[CategoryType]**](CategoryType.md) | This container indicates whether the payment business policy applies to motor vehicle listings, or if it applies to non-motor vehicle listings. | [optional] 
**deposit** | [**Deposit**](Deposit.md) |  | [optional] 
**description** | **str** | A seller-defined description of the payment business policy. This description is only for the seller&#39;s use, and is not exposed on any eBay pages. This field is returned if set for the policy. &lt;br/&gt;&lt;br/&gt;&lt;b&gt;Max length&lt;/b&gt;: 250 | [optional] 
**full_payment_due_in** | [**TimeDuration**](TimeDuration.md) |  | [optional] 
**immediate_pay** | **bool** | The value returned in this field will reflect the value set by the seller in the &lt;b&gt;immediatePay&lt;/b&gt; request field. A value of &lt;code&gt;true&lt;/code&gt; indicates that immediate payment is required from the buyer for: &lt;ul&gt;&lt;li&gt;A fixed-price item&lt;/li&gt;&lt;li&gt;An auction item where the buyer is using the &#39;Buy it Now&#39; option&lt;/li&gt;&lt;li&gt;A deposit for a motor vehicle listing&lt;/li&gt;&lt;/ul&gt;&lt;br /&gt;It is possible for the seller to set this field as &lt;code&gt;true&lt;/code&gt; in the payment business policy, but it will not apply in some scenarios. For example, immediate payment is not applicable for auction listings that have a winning bidder, for buyer purchases that involve the Best Offer feature, or for transactions that happen offline between the buyer and seller. | [optional] 
**marketplace_id** | **str** | The ID of the eBay marketplace to which this payment business policy applies. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**name** | **str** | A seller-defined name for this payment business policy. Names must be unique for policies assigned to the same marketplace.&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Max length:&lt;/b&gt; 64 | [optional] 
**payment_instructions** | **str** | &lt;p class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note:&lt;/b&gt; NO LONGER SUPPORTED. Although this field may be returned for some older payment business policies, payment instructions are no longer supported by payment business policies. If this field is returned, it can be ignored and these payment instructions will not appear in any listings that use the corresponding business policy.&lt;/p&gt;A free-form string field that allows sellers to add detailed payment instructions to their listings. | [optional] 
**payment_methods** | [**List[PaymentMethod]**](PaymentMethod.md) | This array shows the available payment methods that the seller has set for the payment business policy.&lt;br /&gt;&lt;br /&gt;Sellers do not have to specify any electronic payment methods for listings, so this array will often be returned empty unless the payment business policy is intended for motor vehicle listings or other items in categories where offline payments are required or supported. | [optional] 
**payment_policy_id** | **str** | A unique eBay-assigned ID for a payment business policy. This ID is generated when the policy is created. | [optional] 
**warnings** | [**List[Error]**](Error.md) | An array of one or more errors or warnings that were generated during the processing of the request. If there were no issues with the request, this array will return empty. | [optional] 

## Example

```python
from openapi_client.models.set_payment_policy_response import SetPaymentPolicyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SetPaymentPolicyResponse from a JSON string
set_payment_policy_response_instance = SetPaymentPolicyResponse.from_json(json)
# print the JSON string representation of the object
print(SetPaymentPolicyResponse.to_json())

# convert the object into a dict
set_payment_policy_response_dict = set_payment_policy_response_instance.to_dict()
# create an instance of SetPaymentPolicyResponse from a dict
set_payment_policy_response_from_dict = SetPaymentPolicyResponse.from_dict(set_payment_policy_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


