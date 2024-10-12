# AuditEventContext

A valid JSON object with information detailing the context of the audit event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | UUID of the app that was created | [optional] 
**created** | [**ContextAppCreateCreated**](ContextAppCreateCreated.md) |  | [optional] 
**account** | **str** | Which account the number is associated with | [optional] 
**application_id** | **str** | UUID of the app the number is being linked/unlinked to | [optional] 
**country** | **str** | The country of the number | [optional] 
**msisdn** | **str** | The phone number linked/unlinked to your application | [optional] 
**http** | **str** | The URL of the endpoint the number has been forwarded to | [optional] 
**voice_type** | **str** | The type of endpoint the number has been forwarded to | [optional] 
**voice_value** | **str** | The value of the endpoint the number has been forwarded to | [optional] 

## Example

```python
from openapi_client.models.audit_event_context import AuditEventContext

# TODO update the JSON string below
json = "{}"
# create an instance of AuditEventContext from a JSON string
audit_event_context_instance = AuditEventContext.from_json(json)
# print the JSON string representation of the object
print(AuditEventContext.to_json())

# convert the object into a dict
audit_event_context_dict = audit_event_context_instance.to_dict()
# create an instance of AuditEventContext from a dict
audit_event_context_from_dict = AuditEventContext.from_dict(audit_event_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


