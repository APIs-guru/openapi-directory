# PhishingSpike

Alert for a spike in user reported phishing. *Warning*: This type has been deprecated. Use [MailPhishing](/admin-sdk/alertcenter/reference/rest/v1beta1/MailPhishing) instead.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain_id** | [**DomainId**](DomainId.md) |  | [optional] 
**is_internal** | **bool** | If &#x60;true&#x60;, the email originated from within the organization. | [optional] 
**malicious_entity** | [**MaliciousEntity**](MaliciousEntity.md) |  | [optional] 
**messages** | [**List[GmailMessageInfo]**](GmailMessageInfo.md) | The list of messages contained by this alert. | [optional] 

## Example

```python
from openapi_client.models.phishing_spike import PhishingSpike

# TODO update the JSON string below
json = "{}"
# create an instance of PhishingSpike from a JSON string
phishing_spike_instance = PhishingSpike.from_json(json)
# print the JSON string representation of the object
print(PhishingSpike.to_json())

# convert the object into a dict
phishing_spike_dict = phishing_spike_instance.to_dict()
# create an instance of PhishingSpike from a dict
phishing_spike_from_dict = PhishingSpike.from_dict(phishing_spike_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


