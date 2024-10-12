# AuditEventTypesResp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_types** | [**List[AuditEventType]**](AuditEventType.md) | An array of audit event types. | [optional] 

## Example

```python
from openapi_client.models.audit_event_types_resp import AuditEventTypesResp

# TODO update the JSON string below
json = "{}"
# create an instance of AuditEventTypesResp from a JSON string
audit_event_types_resp_instance = AuditEventTypesResp.from_json(json)
# print the JSON string representation of the object
print(AuditEventTypesResp.to_json())

# convert the object into a dict
audit_event_types_resp_dict = audit_event_types_resp_instance.to_dict()
# create an instance of AuditEventTypesResp from a dict
audit_event_types_resp_from_dict = AuditEventTypesResp.from_dict(audit_event_types_resp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


