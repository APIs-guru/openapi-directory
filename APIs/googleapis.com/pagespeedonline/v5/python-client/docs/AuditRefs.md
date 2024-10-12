# AuditRefs

A light reference to an audit by id, used to group and weight audits in a given category.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acronym** | **str** | The conventional acronym for the audit/metric. | [optional] 
**group** | **str** | The category group that the audit belongs to (optional). | [optional] 
**id** | **str** | The audit ref id. | [optional] 
**relevant_audits** | **List[str]** | Any audit IDs closely relevant to this one. | [optional] 
**weight** | **float** | The weight this audit&#39;s score has on the overall category score. | [optional] 

## Example

```python
from openapi_client.models.audit_refs import AuditRefs

# TODO update the JSON string below
json = "{}"
# create an instance of AuditRefs from a JSON string
audit_refs_instance = AuditRefs.from_json(json)
# print the JSON string representation of the object
print(AuditRefs.to_json())

# convert the object into a dict
audit_refs_dict = audit_refs_instance.to_dict()
# create an instance of AuditRefs from a dict
audit_refs_from_dict = AuditRefs.from_dict(audit_refs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


