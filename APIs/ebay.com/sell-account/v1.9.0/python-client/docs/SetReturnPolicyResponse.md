# SetReturnPolicyResponse

A complex type that is populated with a response containing a return policies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_types** | [**List[CategoryType]**](CategoryType.md) | This field always returns &lt;code&gt;ALL_EXCLUDING_MOTORS_VEHICLES&lt;/code&gt; for return business policies, since return business policies are not applicable to motor vehicle listings. | [optional] 
**description** | **str** | A seller-defined description of the return business policy. This description is only for the seller&#39;s use, and is not exposed on any eBay pages. This field is returned if set for the policy. &lt;br/&gt;&lt;br/&gt;&lt;b&gt;Max length&lt;/b&gt;: 250 | [optional] 
**extended_holiday_returns_offered** | **bool** | &lt;p class&#x3D;\&quot;tablenote\&quot;&gt;&lt;span  style&#x3D;\&quot;color: #dd1e31;\&quot;&gt;&lt;b&gt;Important!&lt;/b&gt;&lt;/span&gt; This field is deprecated, since eBay no longer supports extended holiday returns. This field should no longer be returned.&lt;/p&gt;  | [optional] 
**international_override** | [**InternationalReturnOverrideType**](InternationalReturnOverrideType.md) |  | [optional] 
**marketplace_id** | **str** | The ID of the eBay marketplace to which this return business policy applies. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**name** | **str** | A seller-defined name for this return business policy. Names must be unique for policies assigned to the same marketplace.&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Max length:&lt;/b&gt; 64 | [optional] 
**refund_method** | **str** | If a seller indicates that they will accept buyer returns, this value will be &lt;code&gt;MONEY_BACK&lt;/code&gt;. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/account/types/api:RefundMethodEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**restocking_fee_percentage** | **str** | &lt;p class&#x3D;\&quot;tablenote\&quot;&gt;&lt;span  style&#x3D;\&quot;color: #dd1e31;\&quot;&gt;&lt;b&gt;Important!&lt;/b&gt;&lt;/span&gt; This field is deprecated, since eBay no longer allows sellers to charge a restocking fee for buyer remorse returns.&lt;/p&gt; | [optional] 
**return_instructions** | **str** | This text-based field provides more details on seller-specified return instructions. &lt;p class&#x3D;\&quot;tablenote\&quot;&gt;&lt;span  style&#x3D;\&quot;color: #dd1e31;\&quot;&gt;&lt;b&gt;Important!&lt;/b&gt;&lt;/span&gt; This field is no longer supported on many eBay marketplaces. To see if a marketplace and eBay category does support this field, call &lt;a href&#x3D;\&quot;/api-docs/sell/metadata/resources/marketplace/methods/getReturnPolicies\&quot;&gt;getReturnPolicies&lt;/a&gt; method of the &lt;b&gt;Metadata API&lt;/b&gt;. Then you will look for the &lt;b&gt;policyDescriptionEnabled&lt;/b&gt; field with a value of &lt;code&gt;true&lt;/code&gt; for the eBay category.&lt;/span&gt;&lt;/p&gt;&lt;br/&gt;&lt;b&gt;Max length&lt;/b&gt;: 5000 (8000 for DE) | [optional] 
**return_method** | **str** | This field will be returned if the seller is willing and able to offer a replacement item as an alternative to &#39;Money Back&#39;. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/account/types/api:ReturnMethodEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**return_period** | [**TimeDuration**](TimeDuration.md) |  | [optional] 
**return_policy_id** | **str** | A unique eBay-assigned ID for a return business policy. This ID is generated when the policy is created. | [optional] 
**return_shipping_cost_payer** | **str** | This field indicates who is responsible for paying for the shipping charges for returned items. The field can be set to either &lt;code&gt;BUYER&lt;/code&gt; or &lt;code&gt;SELLER&lt;/code&gt;.  &lt;br/&gt;&lt;br/&gt;Note that the seller is always responsible for return shipping costs for SNAD-related issues.  &lt;br/&gt;&lt;br/&gt;This container will be returned unless the business policy states that the seller does not accept returns. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/account/types/api:ReturnShippingCostPayerEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**returns_accepted** | **bool** | If set to &lt;code&gt;true&lt;/code&gt;, the seller accepts returns. If set to &lt;code&gt;false&lt;/code&gt;, this field indicates that the seller does not accept returns. | [optional] 
**warnings** | [**List[Error]**](Error.md) | An array of one or more errors or warnings that were generated during the processing of the request. If there were no issues with the request, this array will return empty. | [optional] 

## Example

```python
from openapi_client.models.set_return_policy_response import SetReturnPolicyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SetReturnPolicyResponse from a JSON string
set_return_policy_response_instance = SetReturnPolicyResponse.from_json(json)
# print the JSON string representation of the object
print(SetReturnPolicyResponse.to_json())

# convert the object into a dict
set_return_policy_response_dict = set_return_policy_response_instance.to_dict()
# create an instance of SetReturnPolicyResponse from a dict
set_return_policy_response_from_dict = SetReturnPolicyResponse.from_dict(set_return_policy_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


