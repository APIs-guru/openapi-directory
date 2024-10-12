# InboundDomainsResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  | [optional] 
**domain** | **str** |  | [optional] 
**valid_mx** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.inbound_domains_response_inner import InboundDomainsResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of InboundDomainsResponseInner from a JSON string
inbound_domains_response_inner_instance = InboundDomainsResponseInner.from_json(json)
# print the JSON string representation of the object
print(InboundDomainsResponseInner.to_json())

# convert the object into a dict
inbound_domains_response_inner_dict = inbound_domains_response_inner_instance.to_dict()
# create an instance of InboundDomainsResponseInner from a dict
inbound_domains_response_inner_from_dict = InboundDomainsResponseInner.from_dict(inbound_domains_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


