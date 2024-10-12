# SenderDomainInfoDkim


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** |  | [optional] 
**valid** | **bool** |  | [optional] 
**valid_after** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.sender_domain_info_dkim import SenderDomainInfoDkim

# TODO update the JSON string below
json = "{}"
# create an instance of SenderDomainInfoDkim from a JSON string
sender_domain_info_dkim_instance = SenderDomainInfoDkim.from_json(json)
# print the JSON string representation of the object
print(SenderDomainInfoDkim.to_json())

# convert the object into a dict
sender_domain_info_dkim_dict = sender_domain_info_dkim_instance.to_dict()
# create an instance of SenderDomainInfoDkim from a dict
sender_domain_info_dkim_from_dict = SenderDomainInfoDkim.from_dict(sender_domain_info_dkim_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


