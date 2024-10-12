# AlertServicePatch

The AlertService resource is a collection of services that can be used to dispatch an alert. Each alert service uses a distinct message transport.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_service_name** | **str** | The name of the alert service. Max 255 characters. | 
**alert_service_notes** | **str** | Notes about the alert service. Max 10,000 characters. Formatting using Markdown is allowed. HTML will be removed. | [optional] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**media_objects** | **List[str]** | Media objects that must be sent with each alert. Only applicable when you use your own email alert services. | [optional] 
**recipient_email_address** | **str** | The email address where alerts will be sent. | 
**recipient_phone_number** | **str** | The phone number where alerts will be sent. Ensure that the number format complies with the external transport service that will send the alert. | 
**transport_alerta** | **str** |  | [optional] 
**transport_all_my_sms** | **str** |  | [optional] 
**transport_amazon_sns** | **str** |  | [optional] 
**transport_bandwidth** | **str** |  | [optional] 
**transport_chatwork** | **str** |  | [optional] 
**transport_click_send** | **str** |  | [optional] 
**transport_clickatell** | **str** |  | [optional] 
**transport_contact_everyone** | **str** |  | [optional] 
**transport_discord** | **str** |  | [optional] 
**transport_email** | **str** |  | [optional] 
**transport_engagespot** | **str** |  | [optional] 
**transport_esendex** | **str** |  | [optional] 
**transport_expo** | **str** |  | [optional] 
**transport_firebase** | **str** |  | [optional] 
**transport_forty_six_elks** | **str** |  | [optional] 
**transport_free_mobile** | **str** |  | [optional] 
**transport_freshdesk** | **str** |  | [optional] 
**transport_gateway_api** | **str** |  | [optional] 
**transport_gitter** | **str** |  | [optional] 
**transport_google_chat** | **str** |  | [optional] 
**transport_gotify** | **str** |  | [optional] 
**transport_help_scout** | **str** |  | [optional] 
**transport_infobip** | **str** |  | [optional] 
**transport_iqsms** | **str** |  | [optional] 
**transport_kaz_info_teh** | **str** |  | [optional] 
**transport_light_sms** | **str** |  | [optional] 
**transport_line_notify** | **str** |  | [optional] 
**transport_linked_in** | **str** |  | [optional] 
**transport_mailjet** | **str** |  | [optional] 
**transport_mastodon** | **str** |  | [optional] 
**transport_mattermost** | **str** |  | [optional] 
**transport_mercure** | **str** |  | [optional] 
**transport_message_bird** | **str** |  | [optional] 
**transport_message_media** | **str** |  | [optional] 
**transport_microsoft_teams** | **str** |  | [optional] 
**transport_mobyt** | **str** |  | [optional] 
**transport_octopush** | **str** |  | [optional] 
**transport_one_signal** | **str** |  | [optional] 
**transport_opsgenie** | **str** |  | [optional] 
**transport_orange_sms** | **str** |  | [optional] 
**transport_ovh_cloud** | **str** |  | [optional] 
**transport_pager_duty** | **str** |  | [optional] 
**transport_pager_tree** | **str** |  | [optional] 
**transport_plivo** | **str** |  | [optional] 
**transport_pushbullet** | **str** |  | [optional] 
**transport_pushover** | **str** |  | [optional] 
**transport_pushy** | **str** |  | [optional] 
**transport_ring_central** | **str** |  | [optional] 
**transport_rocket_chat** | **str** |  | [optional] 
**transport_sendberry** | **str** |  | [optional] 
**transport_sendinblue** | **str** |  | [optional] 
**transport_simple_textin** | **str** |  | [optional] 
**transport_sinch** | **str** |  | [optional] 
**transport_slack** | **str** |  | [optional] 
**transport_sms77** | **str** |  | [optional] 
**transport_sms_biuras** | **str** |  | [optional] 
**transport_sms_factor** | **str** |  | [optional] 
**transport_smsapi** | **str** |  | [optional] 
**transport_smsc** | **str** |  | [optional] 
**transport_smsmode** | **str** |  | [optional] 
**transport_spot_hit** | **str** |  | [optional] 
**transport_telegram** | **str** |  | [optional] 
**transport_telnyx** | **str** |  | [optional] 
**transport_termii** | **str** |  | [optional] 
**transport_trello** | **str** |  | [optional] 
**transport_turbo_sms** | **str** |  | [optional] 
**transport_twilio** | **str** |  | [optional] 
**transport_twitter** | **str** |  | [optional] 
**transport_vonage** | **str** |  | [optional] 
**transport_webhook** | **str** |  | [optional] 
**transport_yunpian** | **str** |  | [optional] 
**transport_zendesk** | **str** |  | [optional] 
**transport_zulip** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.alert_service_patch import AlertServicePatch

# TODO update the JSON string below
json = "{}"
# create an instance of AlertServicePatch from a JSON string
alert_service_patch_instance = AlertServicePatch.from_json(json)
# print the JSON string representation of the object
print(AlertServicePatch.to_json())

# convert the object into a dict
alert_service_patch_dict = alert_service_patch_instance.to_dict()
# create an instance of AlertServicePatch from a dict
alert_service_patch_from_dict = AlertServicePatch.from_dict(alert_service_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


