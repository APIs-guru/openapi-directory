# DatabaseTableAuditingPolicy

A database table auditing policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Resource kind. | [optional] [readonly] 
**location** | **str** | Resource location. | [optional] [readonly] 
**properties** | [**DatabaseTableAuditingPolicyProperties**](DatabaseTableAuditingPolicyProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.database_table_auditing_policy import DatabaseTableAuditingPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseTableAuditingPolicy from a JSON string
database_table_auditing_policy_instance = DatabaseTableAuditingPolicy.from_json(json)
# print the JSON string representation of the object
print(DatabaseTableAuditingPolicy.to_json())

# convert the object into a dict
database_table_auditing_policy_dict = database_table_auditing_policy_instance.to_dict()
# create an instance of DatabaseTableAuditingPolicy from a dict
database_table_auditing_policy_from_dict = DatabaseTableAuditingPolicy.from_dict(database_table_auditing_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


