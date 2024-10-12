# CustomPolicyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Details of the seller&#39;s specific policy and terms for this policy.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Max length:&lt;/b&gt; 15,000 | [optional] 
**label** | **str** | Customer-facing label shown on View Item pages for items to which the policy applies. This seller-defined string is displayed as a system-generated hyperlink pointing to detailed policy information.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Max length:&lt;/b&gt; 65 | [optional] 
**name** | **str** | The seller-defined name for the custom policy. Names must be unique for policies assigned to the same seller, policy type, and eBay marketplace.&lt;br /&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; This field is visible only to the seller. &lt;/span&gt;&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Max length:&lt;/b&gt; 65 | [optional] 

## Example

```python
from openapi_client.models.custom_policy_request import CustomPolicyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CustomPolicyRequest from a JSON string
custom_policy_request_instance = CustomPolicyRequest.from_json(json)
# print the JSON string representation of the object
print(CustomPolicyRequest.to_json())

# convert the object into a dict
custom_policy_request_dict = custom_policy_request_instance.to_dict()
# create an instance of CustomPolicyRequest from a dict
custom_policy_request_from_dict = CustomPolicyRequest.from_dict(custom_policy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


