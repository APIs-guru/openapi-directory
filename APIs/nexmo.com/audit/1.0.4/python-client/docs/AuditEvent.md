# AuditEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**EventLink**](EventLink.md) |  | [optional] 
**account_id** | **str** | The NEXMO_API_KEY of the Vonage API account that the audit event is associated with. | [optional] 
**context** | [**AuditEventContext**](AuditEventContext.md) |  | [optional] 
**created_at** | **date** | When the audit event was created. | [optional] 
**event_type** | [**EventTypes**](EventTypes.md) |  | [optional] 
**event_type_description** | **str** | A description of the event type | [optional] 
**id** | **str** | UUID of the audit event | [optional] 
**source** | **str** | The source of the event. CD: Customer Dashboard DEVAPI: via Developer API  | [optional] 
**source_country** | **str** | ISO 3166-1 Alpha-2 country code recorded for the event. | [optional] 
**source_description** | **str** | Description of the audit event source. | [optional] 
**source_ip** | **str** | The IP address used to make the account change. | [optional] 
**user_email** | **str** | Email of the user whose account the audit event is associated with. | [optional] 
**user_id** | **int** | The ID of the user that the audit event is associated with. | [optional] 

## Example

```python
from openapi_client.models.audit_event import AuditEvent

# TODO update the JSON string below
json = "{}"
# create an instance of AuditEvent from a JSON string
audit_event_instance = AuditEvent.from_json(json)
# print the JSON string representation of the object
print(AuditEvent.to_json())

# convert the object into a dict
audit_event_dict = audit_event_instance.to_dict()
# create an instance of AuditEvent from a dict
audit_event_from_dict = AuditEvent.from_dict(audit_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


