# CompactCustomPolicyResponse

The response payload for requests that return a list of custom policies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_policy_id** | **str** | The unique custom policy identifier for the policy being returned.&lt;br/&gt;&lt;br/&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; This value is automatically assigned by the system when the policy is created.&lt;/span&gt; | [optional] 
**label** | **str** | Customer-facing label shown on View Item pages for items to which the policy applies. This seller-defined string is displayed as a system-generated hyperlink pointing to detailed policy information.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Max length:&lt;/b&gt; 65 | [optional] 
**name** | **str** | The seller-defined name for the custom policy. Names must be unique for policies assigned to the same seller, policy type, and eBay marketplace.&lt;br /&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; This field is visible only to the seller. &lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Max length:&lt;/b&gt; 65 | [optional] 
**policy_type** | **str** | Specifies the type of Custom Policy being returned. &lt;br/&gt;&lt;br/&gt;Two Custom Policy types are supported: &lt;ul&gt;&lt;li&gt;Product Compliance (PRODUCT_COMPLIANCE)&lt;/li&gt; &lt;li&gt;Takeback (TAKE_BACK)&lt;/li&gt;&lt;/ul&gt; For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/account/types/api:CustomPolicyTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.compact_custom_policy_response import CompactCustomPolicyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CompactCustomPolicyResponse from a JSON string
compact_custom_policy_response_instance = CompactCustomPolicyResponse.from_json(json)
# print the JSON string representation of the object
print(CompactCustomPolicyResponse.to_json())

# convert the object into a dict
compact_custom_policy_response_dict = compact_custom_policy_response_instance.to_dict()
# create an instance of CompactCustomPolicyResponse from a dict
compact_custom_policy_response_from_dict = CompactCustomPolicyResponse.from_dict(compact_custom_policy_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


