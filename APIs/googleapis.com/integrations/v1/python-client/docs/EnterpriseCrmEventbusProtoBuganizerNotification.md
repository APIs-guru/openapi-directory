# EnterpriseCrmEventbusProtoBuganizerNotification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignee_email_address** | **str** | Whom to assign the new bug. Optional. | [optional] 
**component_id** | **str** | ID of the buganizer component within which to create a new issue. Required. | [optional] 
**template_id** | **str** | ID of the buganizer template to use. Optional. | [optional] 
**title** | **str** | Title of the issue to be created. Required. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_buganizer_notification import EnterpriseCrmEventbusProtoBuganizerNotification

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoBuganizerNotification from a JSON string
enterprise_crm_eventbus_proto_buganizer_notification_instance = EnterpriseCrmEventbusProtoBuganizerNotification.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoBuganizerNotification.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_buganizer_notification_dict = enterprise_crm_eventbus_proto_buganizer_notification_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoBuganizerNotification from a dict
enterprise_crm_eventbus_proto_buganizer_notification_from_dict = EnterpriseCrmEventbusProtoBuganizerNotification.from_dict(enterprise_crm_eventbus_proto_buganizer_notification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


