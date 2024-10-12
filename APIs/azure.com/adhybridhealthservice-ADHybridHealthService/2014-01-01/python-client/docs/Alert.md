# Alert

 The alert details indicating an issue with service or server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_alert_properties** | [**List[Item]**](Item.md) | The active alert properties. | [optional] 
**additional_information** | [**List[AdditionalInformation]**](AdditionalInformation.md) | Additional information related to the alert. | [optional] 
**alert_id** | **str** | The alert Id. | [optional] 
**created_date** | **datetime** | The date and time,in UTC,when the alert was created. | [optional] 
**description** | **str** | The alert description. | [optional] 
**display_name** | **str** | The display name for the alert. | [optional] 
**last_updated** | **datetime** | The date and time, in UTC, when the alert was last updated. | [optional] 
**level** | **str** | The alert level which indicates the severity of the alert. | [optional] 
**monitor_role_type** | **str** | The monitoring role type for which the alert was raised. | [optional] 
**related_links** | [**List[HelpLink]**](HelpLink.md) | The help links to get more information related to the alert. | [optional] 
**remediation** | **str** | The alert remediation. | [optional] 
**resolved_alert_properties** | [**List[Item]**](Item.md) | The resolved alert properties. | [optional] 
**resolved_date** | **datetime** | The date and time, in UTC, when the alert was resolved. | [optional] 
**scope** | **str** | The scope of the alert. Indicates if it is a service or a server related alert. | [optional] 
**service_id** | **str** | The service Id. | [optional] 
**service_member_id** | **str** | The server Id. | [optional] 
**short_name** | **str** | The alert short name. | [optional] 
**state** | **str** | The alert state which can be either active or resolved with multiple resolution types. | [optional] 
**tenant_id** | **str** | The tenant Id. | [optional] 

## Example

```python
from openapi_client.models.alert import Alert

# TODO update the JSON string below
json = "{}"
# create an instance of Alert from a JSON string
alert_instance = Alert.from_json(json)
# print the JSON string representation of the object
print(Alert.to_json())

# convert the object into a dict
alert_dict = alert_instance.to_dict()
# create an instance of Alert from a dict
alert_from_dict = Alert.from_dict(alert_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


