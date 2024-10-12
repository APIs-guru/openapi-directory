# VacationSettings

Vacation auto-reply settings for an account. These settings correspond to the \"Vacation responder\" feature in the web interface.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_auto_reply** | **bool** | Flag that controls whether Gmail automatically replies to messages. | [optional] 
**end_time** | **str** | An optional end time for sending auto-replies (epoch ms). When this is specified, Gmail will automatically reply only to messages that it receives before the end time. If both &#x60;startTime&#x60; and &#x60;endTime&#x60; are specified, &#x60;startTime&#x60; must precede &#x60;endTime&#x60;. | [optional] 
**response_body_html** | **str** | Response body in HTML format. Gmail will sanitize the HTML before storing it. If both &#x60;response_body_plain_text&#x60; and &#x60;response_body_html&#x60; are specified, &#x60;response_body_html&#x60; will be used. | [optional] 
**response_body_plain_text** | **str** | Response body in plain text format. If both &#x60;response_body_plain_text&#x60; and &#x60;response_body_html&#x60; are specified, &#x60;response_body_html&#x60; will be used. | [optional] 
**response_subject** | **str** | Optional text to prepend to the subject line in vacation responses. In order to enable auto-replies, either the response subject or the response body must be nonempty. | [optional] 
**restrict_to_contacts** | **bool** | Flag that determines whether responses are sent to recipients who are not in the user&#39;s list of contacts. | [optional] 
**restrict_to_domain** | **bool** | Flag that determines whether responses are sent to recipients who are outside of the user&#39;s domain. This feature is only available for Google Workspace users. | [optional] 
**start_time** | **str** | An optional start time for sending auto-replies (epoch ms). When this is specified, Gmail will automatically reply only to messages that it receives after the start time. If both &#x60;startTime&#x60; and &#x60;endTime&#x60; are specified, &#x60;startTime&#x60; must precede &#x60;endTime&#x60;. | [optional] 

## Example

```python
from openapi_client.models.vacation_settings import VacationSettings

# TODO update the JSON string below
json = "{}"
# create an instance of VacationSettings from a JSON string
vacation_settings_instance = VacationSettings.from_json(json)
# print the JSON string representation of the object
print(VacationSettings.to_json())

# convert the object into a dict
vacation_settings_dict = vacation_settings_instance.to_dict()
# create an instance of VacationSettings from a dict
vacation_settings_from_dict = VacationSettings.from_dict(vacation_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


