# GetAlertResponse

Alert details. All fields should be considered optional.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ack_author** | **str** | The user that acknowledged the incident. | [optional] 
**ack_msg** | **str** | A user entered comment for the acknowledgment. | [optional] 
**entity_display_name** | **str** | Used within VictorOps to display a human-readable name for the entity. | [optional] 
**entity_id** | **str** | Identifies the entity (host, service, etc.) this alert was about.  | [optional] 
**message_type** | **str** | The type of alert; INFO, WARNING, ACKNOWLEDGEMENT, CRITICAL, RECOVERY  | [optional] 
**monitoring_tool** | **str** | The name of the monitoring system software (eg. nagios, icinga, sensu, etc.) | [optional] 
**raw** | **str** | The full, raw alert details JSON string (i.e. parse the string into a JSON object)  | [optional] 
**state_message** | **str** | Any additional status information from the alert item. | [optional] 
**state_start_time** | **float** | The time this entity entered its current state (seconds since epoch). | [optional] 
**timestamp** | **float** | Timestamp of the alert in seconds since epoch. | [optional] 

## Example

```python
from openapi_client.models.get_alert_response import GetAlertResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetAlertResponse from a JSON string
get_alert_response_instance = GetAlertResponse.from_json(json)
# print the JSON string representation of the object
print(GetAlertResponse.to_json())

# convert the object into a dict
get_alert_response_dict = get_alert_response_instance.to_dict()
# create an instance of GetAlertResponse from a dict
get_alert_response_from_dict = GetAlertResponse.from_dict(get_alert_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


