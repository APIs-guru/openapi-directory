# ManagedServerSecurityAlertPolicyListResult

A list of the managed Server's security alert policies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[ManagedServerSecurityAlertPolicy]**](ManagedServerSecurityAlertPolicy.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_server_security_alert_policy_list_result import ManagedServerSecurityAlertPolicyListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedServerSecurityAlertPolicyListResult from a JSON string
managed_server_security_alert_policy_list_result_instance = ManagedServerSecurityAlertPolicyListResult.from_json(json)
# print the JSON string representation of the object
print(ManagedServerSecurityAlertPolicyListResult.to_json())

# convert the object into a dict
managed_server_security_alert_policy_list_result_dict = managed_server_security_alert_policy_list_result_instance.to_dict()
# create an instance of ManagedServerSecurityAlertPolicyListResult from a dict
managed_server_security_alert_policy_list_result_from_dict = ManagedServerSecurityAlertPolicyListResult.from_dict(managed_server_security_alert_policy_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


