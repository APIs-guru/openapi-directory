# ReturnPolicyRequest

This root container defines a seller's return business policy for a specific marketplace and category group. This type is used when creating or updating a return business policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_types** | [**List[CategoryType]**](CategoryType.md) | This container indicates which category group that the return policy applies to.&lt;br/&gt;&lt;br/&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note&lt;/b&gt;: Return business policies are not applicable to motor vehicle listings, so the &lt;b&gt;categoryTypes.name&lt;/b&gt; value must be set to &lt;code&gt;ALL_EXCLUDING_MOTORS_VEHICLES&lt;/code&gt; for return business policies.&lt;/span&gt; | [optional] 
**description** | **str** | A seller-defined description of the return business policy. This description is only for the seller&#39;s use, and is not exposed on any eBay pages.  &lt;br/&gt;&lt;br/&gt;&lt;b&gt;Max length&lt;/b&gt;: 250 | [optional] 
**extended_holiday_returns_offered** | **bool** | &lt;p class&#x3D;\&quot;tablenote\&quot;&gt;&lt;span  style&#x3D;\&quot;color: #dd1e31;\&quot;&gt;&lt;b&gt;Important!&lt;/b&gt;&lt;/span&gt; This field is deprecated, since eBay no longer supports extended holiday returns. Any value supplied in this field is neither read nor returned.&lt;/p&gt;  | [optional] 
**international_override** | [**InternationalReturnOverrideType**](InternationalReturnOverrideType.md) |  | [optional] 
**marketplace_id** | **str** | The ID of the eBay marketplace to which this return business policy applies.  For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**name** | **str** | A seller-defined name for this return business policy. Names must be unique for policies assigned to the same marketplace. &lt;br/&gt;&lt;br/&gt;&lt;b&gt;Max length&lt;/b&gt;: 64 | [optional] 
**refund_method** | **str** | This value indicates the refund method that will be used by the seller for buyer returns.&lt;p class&#x3D;\&quot;tablenote\&quot;&gt;&lt;span  style&#x3D;\&quot;color: #dd1e31;\&quot;&gt;&lt;b&gt;Important!&lt;/b&gt;&lt;/span&gt; If this field is not included in a return business policy, it will default to MONEY_BACK.&lt;/p&gt; For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/account/types/api:RefundMethodEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**restocking_fee_percentage** | **str** | &lt;p class&#x3D;\&quot;tablenote\&quot;&gt;&lt;span  style&#x3D;\&quot;color: #dd1e31;\&quot;&gt;&lt;b&gt;Important!&lt;/b&gt;&lt;/span&gt; This field is deprecated, since eBay no longer allows sellers to charge a restocking fee for buyer remorse returns. If this field is included, it is ignored.&lt;/p&gt; | [optional] 
**return_instructions** | **str** | This text-based field provides more details on seller-specified return instructions. &lt;p class&#x3D;\&quot;tablenote\&quot;&gt;&lt;span  style&#x3D;\&quot;color: #dd1e31;\&quot;&gt;&lt;b&gt;Important!&lt;/b&gt;&lt;/span&gt; This field is no longer supported on many eBay marketplaces. To see if a marketplace and eBay category does support this field, call &lt;a href&#x3D;\&quot;/api-docs/sell/metadata/resources/marketplace/methods/getReturnPolicies\&quot;&gt;getReturnPolicies&lt;/a&gt; method of the &lt;b&gt;Metadata API&lt;/b&gt;. Then you will look for the &lt;b&gt;policyDescriptionEnabled&lt;/b&gt; field with a value of &lt;code&gt;true&lt;/code&gt; for the eBay category.&lt;/span&gt;&lt;/p&gt;&lt;br/&gt;&lt;b&gt;Max length&lt;/b&gt;: 5000 (8000 for DE) | [optional] 
**return_method** | **str** | This field can be used if the seller is willing and able to offer a replacement item as an alternative to &#39;Money Back&#39;. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/account/types/api:ReturnMethodEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**return_period** | [**TimeDuration**](TimeDuration.md) |  | [optional] 
**return_shipping_cost_payer** | **str** | This field indicates who is responsible for paying for the shipping charges for returned items. The field can be set to either &lt;code&gt;BUYER&lt;/code&gt; or &lt;code&gt;SELLER&lt;/code&gt;.  &lt;br/&gt;&lt;br/&gt;Depending on the return policy and specifics of the return, either the buyer or the seller can be responsible for the return shipping costs. Note that the seller is always responsible for return shipping costs for SNAD-related issues.  &lt;br/&gt;&lt;br/&gt;This field is conditionally required if &lt;b&gt;returnsAccepted&lt;/b&gt; is set to &lt;code&gt;true&lt;/code&gt;. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/account/types/api:ReturnShippingCostPayerEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**returns_accepted** | **bool** | If set to &lt;code&gt;true&lt;/code&gt;, the seller accepts returns. &lt;p&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt;Top-Rated sellers must accept item returns and the &lt;b&gt;handlingTime&lt;/b&gt; should be set to zero days or one day for a listing to receive a Top-Rated Plus badge on the View Item or search result pages. For more information on eBay&#39;s Top-Rated seller program, see &lt;a href&#x3D;\&quot;http://pages.ebay.com/help/sell/top-rated.html \&quot;&gt;Becoming a Top Rated Seller and qualifying for Top Rated Plus benefits&lt;/a&gt;.&lt;/span&gt;&lt;/p&gt; | [optional] 

## Example

```python
from openapi_client.models.return_policy_request import ReturnPolicyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnPolicyRequest from a JSON string
return_policy_request_instance = ReturnPolicyRequest.from_json(json)
# print the JSON string representation of the object
print(ReturnPolicyRequest.to_json())

# convert the object into a dict
return_policy_request_dict = return_policy_request_instance.to_dict()
# create an instance of ReturnPolicyRequest from a dict
return_policy_request_from_dict = ReturnPolicyRequest.from_dict(return_policy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


