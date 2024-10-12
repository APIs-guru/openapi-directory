# ServerBlobAuditingPolicy

A server blob auditing policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ServerBlobAuditingPolicyProperties**](ServerBlobAuditingPolicyProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.server_blob_auditing_policy import ServerBlobAuditingPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ServerBlobAuditingPolicy from a JSON string
server_blob_auditing_policy_instance = ServerBlobAuditingPolicy.from_json(json)
# print the JSON string representation of the object
print(ServerBlobAuditingPolicy.to_json())

# convert the object into a dict
server_blob_auditing_policy_dict = server_blob_auditing_policy_instance.to_dict()
# create an instance of ServerBlobAuditingPolicy from a dict
server_blob_auditing_policy_from_dict = ServerBlobAuditingPolicy.from_dict(server_blob_auditing_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


