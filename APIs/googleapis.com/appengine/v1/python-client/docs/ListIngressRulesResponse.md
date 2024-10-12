# ListIngressRulesResponse

Response message for Firewall.ListIngressRules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ingress_rules** | [**List[FirewallRule]**](FirewallRule.md) | The ingress FirewallRules for this application. | [optional] 
**next_page_token** | **str** | Continuation token for fetching the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_ingress_rules_response import ListIngressRulesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListIngressRulesResponse from a JSON string
list_ingress_rules_response_instance = ListIngressRulesResponse.from_json(json)
# print the JSON string representation of the object
print(ListIngressRulesResponse.to_json())

# convert the object into a dict
list_ingress_rules_response_dict = list_ingress_rules_response_instance.to_dict()
# create an instance of ListIngressRulesResponse from a dict
list_ingress_rules_response_from_dict = ListIngressRulesResponse.from_dict(list_ingress_rules_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


