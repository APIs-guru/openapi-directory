# DomainUpdateParameters

Properties of the Domain update

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_traffic_from_all_ips** | **bool** | This determines if IP filtering rules ought to be evaluated or not. By default it will not evaluate and will allow traffic from all IPs. | [optional] 
**inbound_ip_rules** | [**List[InboundIpRule]**](InboundIpRule.md) | This determines the IP filtering rules that ought be applied when events are received on this domain. | [optional] 
**tags** | **Dict[str, str]** | Tags of the domains resource | [optional] 

## Example

```python
from openapi_client.models.domain_update_parameters import DomainUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of DomainUpdateParameters from a JSON string
domain_update_parameters_instance = DomainUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(DomainUpdateParameters.to_json())

# convert the object into a dict
domain_update_parameters_dict = domain_update_parameters_instance.to_dict()
# create an instance of DomainUpdateParameters from a dict
domain_update_parameters_from_dict = DomainUpdateParameters.from_dict(domain_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


