# AuditEventType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A description of the event type | [optional] 
**type** | [**EventTypes**](EventTypes.md) |  | [optional] 

## Example

```python
from openapi_client.models.audit_event_type import AuditEventType

# TODO update the JSON string below
json = "{}"
# create an instance of AuditEventType from a JSON string
audit_event_type_instance = AuditEventType.from_json(json)
# print the JSON string representation of the object
print(AuditEventType.to_json())

# convert the object into a dict
audit_event_type_dict = audit_event_type_instance.to_dict()
# create an instance of AuditEventType from a dict
audit_event_type_from_dict = AuditEventType.from_dict(audit_event_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


