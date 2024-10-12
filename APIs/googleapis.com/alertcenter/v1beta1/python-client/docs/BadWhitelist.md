# BadWhitelist

Alert for setting the domain or IP that malicious email comes from as whitelisted domain or IP in Gmail advanced settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain_id** | [**DomainId**](DomainId.md) |  | [optional] 
**malicious_entity** | [**MaliciousEntity**](MaliciousEntity.md) |  | [optional] 
**messages** | [**List[GmailMessageInfo]**](GmailMessageInfo.md) | The list of messages contained by this alert. | [optional] 
**source_ip** | **str** | The source IP address of the malicious email, for example, &#x60;127.0.0.1&#x60;. | [optional] 

## Example

```python
from openapi_client.models.bad_whitelist import BadWhitelist

# TODO update the JSON string below
json = "{}"
# create an instance of BadWhitelist from a JSON string
bad_whitelist_instance = BadWhitelist.from_json(json)
# print the JSON string representation of the object
print(BadWhitelist.to_json())

# convert the object into a dict
bad_whitelist_dict = bad_whitelist_instance.to_dict()
# create an instance of BadWhitelist from a dict
bad_whitelist_from_dict = BadWhitelist.from_dict(bad_whitelist_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


