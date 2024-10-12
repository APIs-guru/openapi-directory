# ConsumerPolicy

Consumer Policy is a set of rules that define what services or service groups can be used for a cloud resource hierarchy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **Dict[str, str]** | Optional. Annotations is an unstructured key-value map stored with a policy that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. [AIP-128](https://google.aip.dev/128#annotations) | [optional] 
**enable_rules** | [**List[EnableRule]**](EnableRule.md) | Enable rules define usable services and service groups. | [optional] 
**etag** | **str** | An opaque tag indicating the current version of the policy, used for concurrency control. | [optional] 
**name** | **str** | Output only. The resource name of the policy. We only allow consumer policy name as &#x60;default&#x60; for now: &#x60;projects/12345/consumerPolicies/default&#x60;, &#x60;folders/12345/consumerPolicies/default&#x60;, &#x60;organizations/12345/consumerPolicies/default&#x60;. | [optional] [readonly] 
**update_time** | **str** | The last-modified time. | [optional] 

## Example

```python
from openapi_client.models.consumer_policy import ConsumerPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ConsumerPolicy from a JSON string
consumer_policy_instance = ConsumerPolicy.from_json(json)
# print the JSON string representation of the object
print(ConsumerPolicy.to_json())

# convert the object into a dict
consumer_policy_dict = consumer_policy_instance.to_dict()
# create an instance of ConsumerPolicy from a dict
consumer_policy_from_dict = ConsumerPolicy.from_dict(consumer_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


