# ExtendedDatabaseBlobAuditingPolicy

An extended database blob auditing policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ExtendedDatabaseBlobAuditingPolicyProperties**](ExtendedDatabaseBlobAuditingPolicyProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.extended_database_blob_auditing_policy import ExtendedDatabaseBlobAuditingPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ExtendedDatabaseBlobAuditingPolicy from a JSON string
extended_database_blob_auditing_policy_instance = ExtendedDatabaseBlobAuditingPolicy.from_json(json)
# print the JSON string representation of the object
print(ExtendedDatabaseBlobAuditingPolicy.to_json())

# convert the object into a dict
extended_database_blob_auditing_policy_dict = extended_database_blob_auditing_policy_instance.to_dict()
# create an instance of ExtendedDatabaseBlobAuditingPolicy from a dict
extended_database_blob_auditing_policy_from_dict = ExtendedDatabaseBlobAuditingPolicy.from_dict(extended_database_blob_auditing_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


