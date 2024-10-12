# BatchUpdateIngressRulesResponse

Response message for Firewall.UpdateAllIngressRules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ingress_rules** | [**List[FirewallRule]**](FirewallRule.md) | The full list of ingress FirewallRules for this application. | [optional] 

## Example

```python
from openapi_client.models.batch_update_ingress_rules_response import BatchUpdateIngressRulesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUpdateIngressRulesResponse from a JSON string
batch_update_ingress_rules_response_instance = BatchUpdateIngressRulesResponse.from_json(json)
# print the JSON string representation of the object
print(BatchUpdateIngressRulesResponse.to_json())

# convert the object into a dict
batch_update_ingress_rules_response_dict = batch_update_ingress_rules_response_instance.to_dict()
# create an instance of BatchUpdateIngressRulesResponse from a dict
batch_update_ingress_rules_response_from_dict = BatchUpdateIngressRulesResponse.from_dict(batch_update_ingress_rules_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


