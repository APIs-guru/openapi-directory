# ServerBlobAuditingPolicyListResult

A list of server auditing settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[ServerBlobAuditingPolicy]**](ServerBlobAuditingPolicy.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.server_blob_auditing_policy_list_result import ServerBlobAuditingPolicyListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ServerBlobAuditingPolicyListResult from a JSON string
server_blob_auditing_policy_list_result_instance = ServerBlobAuditingPolicyListResult.from_json(json)
# print the JSON string representation of the object
print(ServerBlobAuditingPolicyListResult.to_json())

# convert the object into a dict
server_blob_auditing_policy_list_result_dict = server_blob_auditing_policy_list_result_instance.to_dict()
# create an instance of ServerBlobAuditingPolicyListResult from a dict
server_blob_auditing_policy_list_result_from_dict = ServerBlobAuditingPolicyListResult.from_dict(server_blob_auditing_policy_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


