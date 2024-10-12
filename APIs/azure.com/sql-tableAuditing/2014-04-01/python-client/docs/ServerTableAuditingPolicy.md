# ServerTableAuditingPolicy

A server table auditing policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Resource kind. | [optional] [readonly] 
**location** | **str** | Resource location. | [optional] [readonly] 
**properties** | [**ServerTableAuditingPolicyProperties**](ServerTableAuditingPolicyProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.server_table_auditing_policy import ServerTableAuditingPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ServerTableAuditingPolicy from a JSON string
server_table_auditing_policy_instance = ServerTableAuditingPolicy.from_json(json)
# print the JSON string representation of the object
print(ServerTableAuditingPolicy.to_json())

# convert the object into a dict
server_table_auditing_policy_dict = server_table_auditing_policy_instance.to_dict()
# create an instance of ServerTableAuditingPolicy from a dict
server_table_auditing_policy_from_dict = ServerTableAuditingPolicy.from_dict(server_table_auditing_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


