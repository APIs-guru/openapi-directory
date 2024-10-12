# SenderDomainInfo


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
from openapi_client.models.sender_domain_info import SenderDomainInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SenderDomainInfo from a JSON string
sender_domain_info_instance = SenderDomainInfo.from_json(json)
# print the JSON string representation of the object
print(SenderDomainInfo.to_json())

# convert the object into a dict
sender_domain_info_dict = sender_domain_info_instance.to_dict()
# create an instance of SenderDomainInfo from a dict
sender_domain_info_from_dict = SenderDomainInfo.from_dict(sender_domain_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


