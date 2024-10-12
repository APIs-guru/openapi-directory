# PaymentPolicyRequest

This root container defines a seller's payment business policy for a specific marketplace and category group. This type is used when creating or updating a payment business policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_types** | [**List[CategoryType]**](CategoryType.md) | This container is used to specify whether the payment business policy applies to motor vehicle listings, or if it applies to non-motor vehicle listings. | [optional] 
**deposit** | [**Deposit**](Deposit.md) |  | [optional] 
**description** | **str** | A seller-defined description of the payment business policy. This description is only for the seller&#39;s use, and is not exposed on any eBay pages.  &lt;br/&gt;&lt;br/&gt;&lt;b&gt;Max length&lt;/b&gt;: 250 | [optional] 
**full_payment_due_in** | [**TimeDuration**](TimeDuration.md) |  | [optional] 
**immediate_pay** | **bool** | This field should be included and set to &lt;code&gt;true&lt;/code&gt; if the seller wants to require immediate payment from the buyer for: &lt;ul&gt;&lt;li&gt;A fixed-price item&lt;/li&gt;&lt;li&gt;An auction item where the buyer is using the &#39;Buy it Now&#39; option&lt;/li&gt;&lt;li&gt;A deposit for a motor vehicle listing&lt;/li&gt;&lt;/ul&gt;&lt;br /&gt;&lt;b&gt;Default:&lt;/b&gt; False | [optional] 
**marketplace_id** | **str** | The ID of the eBay marketplace to which this payment business policy applies. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**name** | **str** | A seller-defined name for this payment business policy. Names must be unique for policies assigned to the same marketplace.&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Max length:&lt;/b&gt; 64 | [optional] 
**payment_instructions** | **str** | &lt;p class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note:&lt;/b&gt; DO NOT USE THIS FIELD. Payment instructions are no longer supported by payment business policies.&lt;/p&gt;A free-form string field that allows sellers to add detailed payment instructions to their listings. | [optional] 
**payment_methods** | [**List[PaymentMethod]**](PaymentMethod.md) | &lt;p class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note:&lt;/b&gt; This field applies only when the seller needs to specify one or more offline payment methods. eBay now manages the electronic payment options available to buyers to pay for the item.&lt;/p&gt;This array is used to specify one or more offline payment methods that will be accepted for payment that occurs off of eBay&#39;s platform. | [optional] 

## Example

```python
from openapi_client.models.payment_policy_request import PaymentPolicyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentPolicyRequest from a JSON string
payment_policy_request_instance = PaymentPolicyRequest.from_json(json)
# print the JSON string representation of the object
print(PaymentPolicyRequest.to_json())

# convert the object into a dict
payment_policy_request_dict = payment_policy_request_instance.to_dict()
# create an instance of PaymentPolicyRequest from a dict
payment_policy_request_from_dict = PaymentPolicyRequest.from_dict(payment_policy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


