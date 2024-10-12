# IncidentNotificationRule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**property_id** | **str** |  | [optional] 
**rules** | [**List[NotificationRule]**](NotificationRule.md) |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.incident_notification_rule import IncidentNotificationRule

# TODO update the JSON string below
json = "{}"
# create an instance of IncidentNotificationRule from a JSON string
incident_notification_rule_instance = IncidentNotificationRule.from_json(json)
# print the JSON string representation of the object
print(IncidentNotificationRule.to_json())

# convert the object into a dict
incident_notification_rule_dict = incident_notification_rule_instance.to_dict()
# create an instance of IncidentNotificationRule from a dict
incident_notification_rule_from_dict = IncidentNotificationRule.from_dict(incident_notification_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


