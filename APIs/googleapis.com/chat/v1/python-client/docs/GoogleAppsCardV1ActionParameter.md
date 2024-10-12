# GoogleAppsCardV1ActionParameter

List of string parameters to supply when the action method is invoked. For example, consider three snooze buttons: snooze now, snooze one day, or snooze next week. You might use `action method = snooze()`, passing the snooze type and snooze time in the list of string parameters. To learn more, see [`CommonEventObject`](https://developers.google.com/chat/api/reference/rest/v1/Event#commoneventobject). [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The name of the parameter for the action script. | [optional] 
**value** | **str** | The value of the parameter. | [optional] 

## Example

```python
from openapi_client.models.google_apps_card_v1_action_parameter import GoogleAppsCardV1ActionParameter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCardV1ActionParameter from a JSON string
google_apps_card_v1_action_parameter_instance = GoogleAppsCardV1ActionParameter.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCardV1ActionParameter.to_json())

# convert the object into a dict
google_apps_card_v1_action_parameter_dict = google_apps_card_v1_action_parameter_instance.to_dict()
# create an instance of GoogleAppsCardV1ActionParameter from a dict
google_apps_card_v1_action_parameter_from_dict = GoogleAppsCardV1ActionParameter.from_dict(google_apps_card_v1_action_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


