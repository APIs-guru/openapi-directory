# CustomPolicyCreateRequest

This type is used by the request payload of the createCustomPolicy method to define a new custom policy for a specific marketplace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Details of the seller&#39;s specific policy and terms for this policy.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Max length:&lt;/b&gt; 15,000 | [optional] 
**label** | **str** | Customer-facing label shown on View Item pages for items to which the policy applies. This seller-defined string is displayed as a system-generated hyperlink pointing to detailed policy information.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Max length:&lt;/b&gt; 65 | [optional] 
**name** | **str** | The seller-defined name for the custom policy. Names must be unique for policies assigned to the same seller, policy type, and eBay marketplace.&lt;br /&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; This field is visible only to the seller. &lt;/span&gt;&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Max length:&lt;/b&gt; 65 | [optional] 
**policy_type** | **str** | Specifies the type of custom policy being created. &lt;br/&gt;&lt;br/&gt;Two Custom Policy types are supported: &lt;ul&gt;&lt;li&gt;Product Compliance (PRODUCT_COMPLIANCE)&lt;/li&gt; &lt;li&gt;Takeback (TAKE_BACK)&lt;/li&gt;&lt;/ul&gt; For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/account/types/api:CustomPolicyTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.custom_policy_create_request import CustomPolicyCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CustomPolicyCreateRequest from a JSON string
custom_policy_create_request_instance = CustomPolicyCreateRequest.from_json(json)
# print the JSON string representation of the object
print(CustomPolicyCreateRequest.to_json())

# convert the object into a dict
custom_policy_create_request_dict = custom_policy_create_request_instance.to_dict()
# create an instance of CustomPolicyCreateRequest from a dict
custom_policy_create_request_from_dict = CustomPolicyCreateRequest.from_dict(custom_policy_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


