# GoogleApiServiceusageV2alphaConsumerPolicy

Consumer Policy is a set of rules that define what services or service groups can be used for a cloud resource hierarchy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **Dict[str, str]** | Optional. Annotations is an unstructured key-value map stored with a policy that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. [AIP-128](https://google.aip.dev/128#annotations) | [optional] 
**create_time** | **str** | Output only. The time the policy was created. For singleton policies, this is the first touch of the policy. | [optional] [readonly] 
**enable_rules** | [**List[GoogleApiServiceusageV2alphaEnableRule]**](GoogleApiServiceusageV2alphaEnableRule.md) | Enable rules define usable services, groups, and categories. There can currently be at most one &#x60;EnableRule&#x60;. This restriction will be lifted in later releases. | [optional] 
**etag** | **str** | Output only. An opaque tag indicating the current version of the policy, used for concurrency control. | [optional] [readonly] 
**name** | **str** | Output only. The resource name of the policy. Only the &#x60;default&#x60; policy is supported: &#x60;projects/12345/consumerPolicies/default&#x60;, &#x60;folders/12345/consumerPolicies/default&#x60;, &#x60;organizations/12345/consumerPolicies/default&#x60;. | [optional] [readonly] 
**update_time** | **str** | Output only. The time the policy was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_api_serviceusage_v2alpha_consumer_policy import GoogleApiServiceusageV2alphaConsumerPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleApiServiceusageV2alphaConsumerPolicy from a JSON string
google_api_serviceusage_v2alpha_consumer_policy_instance = GoogleApiServiceusageV2alphaConsumerPolicy.from_json(json)
# print the JSON string representation of the object
print(GoogleApiServiceusageV2alphaConsumerPolicy.to_json())

# convert the object into a dict
google_api_serviceusage_v2alpha_consumer_policy_dict = google_api_serviceusage_v2alpha_consumer_policy_instance.to_dict()
# create an instance of GoogleApiServiceusageV2alphaConsumerPolicy from a dict
google_api_serviceusage_v2alpha_consumer_policy_from_dict = GoogleApiServiceusageV2alphaConsumerPolicy.from_dict(google_api_serviceusage_v2alpha_consumer_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


