# SendersDomainsResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  | [optional] 
**dkim** | [**SenderDomainInfoDkim**](SenderDomainInfoDkim.md) |  | [optional] 
**domain** | **str** |  | [optional] 
**last_tested_at** | **str** |  | [optional] 
**spf** | [**SenderDomainInfoDkim**](SenderDomainInfoDkim.md) |  | [optional] 
**valid_signing** | **bool** |  | [optional] 
**verified_at** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.senders_domains_response_inner import SendersDomainsResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of SendersDomainsResponseInner from a JSON string
senders_domains_response_inner_instance = SendersDomainsResponseInner.from_json(json)
# print the JSON string representation of the object
print(SendersDomainsResponseInner.to_json())

# convert the object into a dict
senders_domains_response_inner_dict = senders_domains_response_inner_instance.to_dict()
# create an instance of SendersDomainsResponseInner from a dict
senders_domains_response_inner_from_dict = SendersDomainsResponseInner.from_dict(senders_domains_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


