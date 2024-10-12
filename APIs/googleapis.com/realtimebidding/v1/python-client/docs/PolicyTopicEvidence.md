# PolicyTopicEvidence

Evidence associated with a policy topic entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_not_crawlable** | [**DestinationNotCrawlableEvidence**](DestinationNotCrawlableEvidence.md) |  | [optional] 
**destination_not_working** | [**DestinationNotWorkingEvidence**](DestinationNotWorkingEvidence.md) |  | [optional] 
**destination_url** | [**DestinationUrlEvidence**](DestinationUrlEvidence.md) |  | [optional] 
**domain_call** | [**DomainCallEvidence**](DomainCallEvidence.md) |  | [optional] 
**download_size** | [**DownloadSizeEvidence**](DownloadSizeEvidence.md) |  | [optional] 
**http_call** | [**HttpCallEvidence**](HttpCallEvidence.md) |  | [optional] 
**http_cookie** | [**HttpCookieEvidence**](HttpCookieEvidence.md) |  | [optional] 

## Example

```python
from openapi_client.models.policy_topic_evidence import PolicyTopicEvidence

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyTopicEvidence from a JSON string
policy_topic_evidence_instance = PolicyTopicEvidence.from_json(json)
# print the JSON string representation of the object
print(PolicyTopicEvidence.to_json())

# convert the object into a dict
policy_topic_evidence_dict = policy_topic_evidence_instance.to_dict()
# create an instance of PolicyTopicEvidence from a dict
policy_topic_evidence_from_dict = PolicyTopicEvidence.from_dict(policy_topic_evidence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


