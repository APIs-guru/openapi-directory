# PolicyTopicEntry

Each policy topic entry will represent a violation of a policy topic for a creative, with the policy topic information and optional evidence for the policy violation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**evidences** | [**List[PolicyTopicEvidence]**](PolicyTopicEvidence.md) | Pieces of evidence associated with this policy topic entry. | [optional] 
**help_center_url** | **str** | URL of the help center article describing this policy topic. | [optional] 
**missing_certificate** | **bool** | Whether or not the policy topic is missing a certificate. Some policy topics require a certificate to unblock serving in some regions. For more information about creative certification, refer to: https://support.google.com/authorizedbuyers/answer/7450776 | [optional] 
**policy_topic** | **str** | Policy topic this entry refers to. For example, \&quot;ALCOHOL\&quot;, \&quot;TRADEMARKS_IN_AD_TEXT\&quot;, or \&quot;DESTINATION_NOT_WORKING\&quot;. The set of possible policy topics is not fixed for a particular API version and may change at any time. Can be used to filter the response of the creatives.list method | [optional] 

## Example

```python
from openapi_client.models.policy_topic_entry import PolicyTopicEntry

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyTopicEntry from a JSON string
policy_topic_entry_instance = PolicyTopicEntry.from_json(json)
# print the JSON string representation of the object
print(PolicyTopicEntry.to_json())

# convert the object into a dict
policy_topic_entry_dict = policy_topic_entry_instance.to_dict()
# create an instance of PolicyTopicEntry from a dict
policy_topic_entry_from_dict = PolicyTopicEntry.from_dict(policy_topic_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


