# IncidentNotification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attempted_at** | **str** |  | [optional] 
**id** | **int** |  | [optional] 
**queued_at** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.incident_notification import IncidentNotification

# TODO update the JSON string below
json = "{}"
# create an instance of IncidentNotification from a JSON string
incident_notification_instance = IncidentNotification.from_json(json)
# print the JSON string representation of the object
print(IncidentNotification.to_json())

# convert the object into a dict
incident_notification_dict = incident_notification_instance.to_dict()
# create an instance of IncidentNotification from a dict
incident_notification_from_dict = IncidentNotification.from_dict(incident_notification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


