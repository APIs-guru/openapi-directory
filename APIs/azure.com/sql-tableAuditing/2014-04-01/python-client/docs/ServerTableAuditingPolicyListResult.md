# ServerTableAuditingPolicyListResult

Represents the response to a list server table auditing policies request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ServerTableAuditingPolicy]**](ServerTableAuditingPolicy.md) | The list of server table auditing policies. | 

## Example

```python
from openapi_client.models.server_table_auditing_policy_list_result import ServerTableAuditingPolicyListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ServerTableAuditingPolicyListResult from a JSON string
server_table_auditing_policy_list_result_instance = ServerTableAuditingPolicyListResult.from_json(json)
# print the JSON string representation of the object
print(ServerTableAuditingPolicyListResult.to_json())

# convert the object into a dict
server_table_auditing_policy_list_result_dict = server_table_auditing_policy_list_result_instance.to_dict()
# create an instance of ServerTableAuditingPolicyListResult from a dict
server_table_auditing_policy_list_result_from_dict = ServerTableAuditingPolicyListResult.from_dict(server_table_auditing_policy_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


