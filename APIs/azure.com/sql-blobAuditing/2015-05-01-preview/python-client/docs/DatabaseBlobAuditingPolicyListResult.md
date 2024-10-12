# DatabaseBlobAuditingPolicyListResult

A list of database auditing settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[DatabaseBlobAuditingPolicy]**](DatabaseBlobAuditingPolicy.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.database_blob_auditing_policy_list_result import DatabaseBlobAuditingPolicyListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseBlobAuditingPolicyListResult from a JSON string
database_blob_auditing_policy_list_result_instance = DatabaseBlobAuditingPolicyListResult.from_json(json)
# print the JSON string representation of the object
print(DatabaseBlobAuditingPolicyListResult.to_json())

# convert the object into a dict
database_blob_auditing_policy_list_result_dict = database_blob_auditing_policy_list_result_instance.to_dict()
# create an instance of DatabaseBlobAuditingPolicyListResult from a dict
database_blob_auditing_policy_list_result_from_dict = DatabaseBlobAuditingPolicyListResult.from_dict(database_blob_auditing_policy_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


