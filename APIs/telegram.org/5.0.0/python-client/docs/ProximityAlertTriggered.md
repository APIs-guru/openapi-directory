# ProximityAlertTriggered

This object represents the content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distance** | **int** | The distance between the users | 
**traveler** | [**User**](User.md) |  | 
**watcher** | [**User**](User.md) |  | 

## Example

```python
from openapi_client.models.proximity_alert_triggered import ProximityAlertTriggered

# TODO update the JSON string below
json = "{}"
# create an instance of ProximityAlertTriggered from a JSON string
proximity_alert_triggered_instance = ProximityAlertTriggered.from_json(json)
# print the JSON string representation of the object
print(ProximityAlertTriggered.to_json())

# convert the object into a dict
proximity_alert_triggered_dict = proximity_alert_triggered_instance.to_dict()
# create an instance of ProximityAlertTriggered from a dict
proximity_alert_triggered_from_dict = ProximityAlertTriggered.from_dict(proximity_alert_triggered_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


