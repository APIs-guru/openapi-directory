# PrimaryAdminChangedEvent

Event occurred when primary admin changed in customer's account. The event are being received from insight forwarder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **str** | domain in which actioned occurred | [optional] 
**previous_admin_email** | **str** | Email of person who was the primary admin before the action | [optional] 
**updated_admin_email** | **str** | Email of person who is the primary admin after the action | [optional] 

## Example

```python
from openapi_client.models.primary_admin_changed_event import PrimaryAdminChangedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of PrimaryAdminChangedEvent from a JSON string
primary_admin_changed_event_instance = PrimaryAdminChangedEvent.from_json(json)
# print the JSON string representation of the object
print(PrimaryAdminChangedEvent.to_json())

# convert the object into a dict
primary_admin_changed_event_dict = primary_admin_changed_event_instance.to_dict()
# create an instance of PrimaryAdminChangedEvent from a dict
primary_admin_changed_event_from_dict = PrimaryAdminChangedEvent.from_dict(primary_admin_changed_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


