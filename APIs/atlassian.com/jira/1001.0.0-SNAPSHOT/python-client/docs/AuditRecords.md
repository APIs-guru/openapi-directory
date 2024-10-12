# AuditRecords

Container for a list of audit records.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **int** | The requested or default limit on the number of audit items to be returned. | [optional] [readonly] 
**offset** | **int** | The number of audit items skipped before the first item in this list. | [optional] [readonly] 
**records** | [**List[AuditRecordBean]**](AuditRecordBean.md) | The list of audit items. | [optional] [readonly] 
**total** | **int** | The total number of audit items returned. | [optional] [readonly] 

## Example

```python
from openapi_client.models.audit_records import AuditRecords

# TODO update the JSON string below
json = "{}"
# create an instance of AuditRecords from a JSON string
audit_records_instance = AuditRecords.from_json(json)
# print the JSON string representation of the object
print(AuditRecords.to_json())

# convert the object into a dict
audit_records_dict = audit_records_instance.to_dict()
# create an instance of AuditRecords from a dict
audit_records_from_dict = AuditRecords.from_dict(audit_records_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


