# MailPhishing

Proto for all phishing alerts with common payload. Supported types are any of the following: * User reported phishing * User reported spam spike * Suspicious message reported * Phishing reclassification * Malware reclassification * Gmail potential employee spoofing

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain_id** | [**DomainId**](DomainId.md) |  | [optional] 
**is_internal** | **bool** | If &#x60;true&#x60;, the email originated from within the organization. | [optional] 
**malicious_entity** | [**MaliciousEntity**](MaliciousEntity.md) |  | [optional] 
**messages** | [**List[GmailMessageInfo]**](GmailMessageInfo.md) | The list of messages contained by this alert. | [optional] 
**system_action_type** | **str** | System actions on the messages. | [optional] 

## Example

```python
from openapi_client.models.mail_phishing import MailPhishing

# TODO update the JSON string below
json = "{}"
# create an instance of MailPhishing from a JSON string
mail_phishing_instance = MailPhishing.from_json(json)
# print the JSON string representation of the object
print(MailPhishing.to_json())

# convert the object into a dict
mail_phishing_dict = mail_phishing_instance.to_dict()
# create an instance of MailPhishing from a dict
mail_phishing_from_dict = MailPhishing.from_dict(mail_phishing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


