# LogicalServerSecurityAlertPolicyListResult

A list of the server's security alert policies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[ServerSecurityAlertPolicy]**](ServerSecurityAlertPolicy.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.logical_server_security_alert_policy_list_result import LogicalServerSecurityAlertPolicyListResult

# TODO update the JSON string below
json = "{}"
# create an instance of LogicalServerSecurityAlertPolicyListResult from a JSON string
logical_server_security_alert_policy_list_result_instance = LogicalServerSecurityAlertPolicyListResult.from_json(json)
# print the JSON string representation of the object
print(LogicalServerSecurityAlertPolicyListResult.to_json())

# convert the object into a dict
logical_server_security_alert_policy_list_result_dict = logical_server_security_alert_policy_list_result_instance.to_dict()
# create an instance of LogicalServerSecurityAlertPolicyListResult from a dict
logical_server_security_alert_policy_list_result_from_dict = LogicalServerSecurityAlertPolicyListResult.from_dict(logical_server_security_alert_policy_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


