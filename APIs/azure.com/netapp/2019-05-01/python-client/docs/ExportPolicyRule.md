# ExportPolicyRule

Volume Export Policy Rule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_clients** | **str** | Client ingress specification as comma separated string with IPv4 CIDRs, IPv4 host addresses and host names | [optional] 
**cifs** | **bool** | Allows CIFS protocol | [optional] 
**nfsv3** | **bool** | Allows NFSv3 protocol | [optional] 
**nfsv4** | **bool** | Deprecated: Will use the NFSv4.1 protocol, please use swagger version 2019-07-01 or later | [optional] 
**rule_index** | **int** | Order index | [optional] 
**unix_read_only** | **bool** | Read only access | [optional] 
**unix_read_write** | **bool** | Read and write access | [optional] 

## Example

```python
from openapi_client.models.export_policy_rule import ExportPolicyRule

# TODO update the JSON string below
json = "{}"
# create an instance of ExportPolicyRule from a JSON string
export_policy_rule_instance = ExportPolicyRule.from_json(json)
# print the JSON string representation of the object
print(ExportPolicyRule.to_json())

# convert the object into a dict
export_policy_rule_dict = export_policy_rule_instance.to_dict()
# create an instance of ExportPolicyRule from a dict
export_policy_rule_from_dict = ExportPolicyRule.from_dict(export_policy_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


