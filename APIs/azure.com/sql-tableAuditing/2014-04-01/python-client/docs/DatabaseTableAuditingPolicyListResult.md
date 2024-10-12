# DatabaseTableAuditingPolicyListResult

Represents the response to a list database table auditing policies request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[DatabaseTableAuditingPolicy]**](DatabaseTableAuditingPolicy.md) | The list of database table auditing policies. | 

## Example

```python
from openapi_client.models.database_table_auditing_policy_list_result import DatabaseTableAuditingPolicyListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseTableAuditingPolicyListResult from a JSON string
database_table_auditing_policy_list_result_instance = DatabaseTableAuditingPolicyListResult.from_json(json)
# print the JSON string representation of the object
print(DatabaseTableAuditingPolicyListResult.to_json())

# convert the object into a dict
database_table_auditing_policy_list_result_dict = database_table_auditing_policy_list_result_instance.to_dict()
# create an instance of DatabaseTableAuditingPolicyListResult from a dict
database_table_auditing_policy_list_result_from_dict = DatabaseTableAuditingPolicyListResult.from_dict(database_table_auditing_policy_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


