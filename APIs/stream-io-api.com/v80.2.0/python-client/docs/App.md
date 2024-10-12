# App


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agora_options** | [**Config**](Config.md) |  | [optional] 
**async_url_enrich_enabled** | **bool** |  | 
**auto_translation_enabled** | **bool** |  | [optional] 
**before_message_send_hook_url** | **str** |  | [optional] 
**call_types** | [**Dict[str, CallType]**](CallType.md) |  | 
**campaign_enabled** | **bool** |  | 
**cdn_expiration_seconds** | **int** |  | 
**channel_configs** | [**Dict[str, ChannelConfig]**](ChannelConfig.md) | Object with channel configs | 
**custom_action_handler_url** | **str** |  | 
**disable_auth_checks** | **bool** |  | 
**disable_permissions_checks** | **bool** |  | 
**enforce_unique_usernames** | **str** |  | 
**file_upload_config** | [**FileUploadConfig**](FileUploadConfig.md) |  | 
**grants** | **Dict[str, List[str]]** |  | 
**hms_options** | [**Config**](Config.md) |  | [optional] 
**image_moderation_enabled** | **bool** |  | 
**image_moderation_labels** | **List[str]** |  | [optional] 
**image_upload_config** | [**FileUploadConfig**](FileUploadConfig.md) |  | 
**multi_tenant_enabled** | **bool** |  | 
**name** | **str** |  | 
**organization** | **str** |  | 
**permission_version** | **str** |  | 
**policies** | **Dict[str, List[Policy]]** |  | 
**push_notifications** | [**PushNotificationFields**](PushNotificationFields.md) |  | 
**reminders_interval** | **int** |  | 
**revoke_tokens_issued_before** | **datetime** |  | [optional] 
**search_backend** | **str** | Backend implementation used for search | 
**sqs_key** | **str** |  | 
**sqs_secret** | **str** |  | 
**sqs_url** | **str** |  | 
**suspended** | **bool** |  | 
**suspended_explanation** | **str** |  | 
**user_search_disallowed_roles** | **List[str]** |  | 
**video_provider** | **str** |  | 
**webhook_events** | **List[str]** |  | 
**webhook_url** | **str** |  | 

## Example

```python
from openapi_client.models.app import App

# TODO update the JSON string below
json = "{}"
# create an instance of App from a JSON string
app_instance = App.from_json(json)
# print the JSON string representation of the object
print(App.to_json())

# convert the object into a dict
app_dict = app_instance.to_dict()
# create an instance of App from a dict
app_from_dict = App.from_dict(app_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


