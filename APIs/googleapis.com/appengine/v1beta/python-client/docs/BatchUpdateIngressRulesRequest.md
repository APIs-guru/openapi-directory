# BatchUpdateIngressRulesRequest

Request message for Firewall.BatchUpdateIngressRules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ingress_rules** | [**List[FirewallRule]**](FirewallRule.md) | A list of FirewallRules to replace the existing set. | [optional] 

## Example

```python
from openapi_client.models.batch_update_ingress_rules_request import BatchUpdateIngressRulesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUpdateIngressRulesRequest from a JSON string
batch_update_ingress_rules_request_instance = BatchUpdateIngressRulesRequest.from_json(json)
# print the JSON string representation of the object
print(BatchUpdateIngressRulesRequest.to_json())

# convert the object into a dict
batch_update_ingress_rules_request_dict = batch_update_ingress_rules_request_instance.to_dict()
# create an instance of BatchUpdateIngressRulesRequest from a dict
batch_update_ingress_rules_request_from_dict = BatchUpdateIngressRulesRequest.from_dict(batch_update_ingress_rules_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


