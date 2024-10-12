# DatabaseBlobAuditingPolicy

A database blob auditing policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Resource kind. | [optional] [readonly] 
**properties** | [**DatabaseBlobAuditingPolicyProperties**](DatabaseBlobAuditingPolicyProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.database_blob_auditing_policy import DatabaseBlobAuditingPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseBlobAuditingPolicy from a JSON string
database_blob_auditing_policy_instance = DatabaseBlobAuditingPolicy.from_json(json)
# print the JSON string representation of the object
print(DatabaseBlobAuditingPolicy.to_json())

# convert the object into a dict
database_blob_auditing_policy_dict = database_blob_auditing_policy_instance.to_dict()
# create an instance of DatabaseBlobAuditingPolicy from a dict
database_blob_auditing_policy_from_dict = DatabaseBlobAuditingPolicy.from_dict(database_blob_auditing_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


