# UpdateAppRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agora_options** | [**ConfigRequest**](ConfigRequest.md) |  | [optional] 
**apn_config** | [**APNConfigRequest**](APNConfigRequest.md) |  | [optional] 
**async_moderation_config** | [**AsyncModerationConfigurationRequest**](AsyncModerationConfigurationRequest.md) |  | [optional] 
**async_url_enrich_enabled** | **bool** |  | [optional] 
**auto_translation_enabled** | **bool** |  | [optional] 
**before_message_send_hook_url** | **str** |  | [optional] 
**cdn_expiration_seconds** | **int** |  | [optional] 
**channel_hide_members_only** | **bool** |  | [optional] 
**custom_action_handler_url** | **str** |  | [optional] 
**disable_auth_checks** | **bool** |  | [optional] 
**disable_permissions_checks** | **bool** |  | [optional] 
**enforce_unique_usernames** | **str** |  | [optional] 
**file_upload_config** | [**FileUploadConfigRequest**](FileUploadConfigRequest.md) |  | [optional] 
**firebase_config** | [**FirebaseConfigRequest**](FirebaseConfigRequest.md) |  | [optional] 
**grants** | **Dict[str, List[str]]** |  | [optional] 
**hms_options** | [**ConfigRequest**](ConfigRequest.md) |  | [optional] 
**huawei_config** | [**HuaweiConfigRequest**](HuaweiConfigRequest.md) |  | [optional] 
**image_moderation_block_labels** | **List[str]** |  | [optional] 
**image_moderation_enabled** | **bool** |  | [optional] 
**image_moderation_labels** | **List[str]** |  | [optional] 
**image_upload_config** | [**FileUploadConfigRequest**](FileUploadConfigRequest.md) |  | [optional] 
**migrate_permissions_to_v2** | **bool** |  | [optional] 
**multi_tenant_enabled** | **bool** |  | [optional] 
**permission_version** | **str** |  | [optional] 
**push_config** | [**PushConfigRequest**](PushConfigRequest.md) |  | [optional] 
**reminders_interval** | **int** |  | [optional] 
**revoke_tokens_issued_before** | **datetime** |  | [optional] 
**sqs_key** | **str** |  | [optional] 
**sqs_secret** | **str** |  | [optional] 
**sqs_url** | **str** |  | [optional] 
**user_search_disallowed_roles** | **List[str]** |  | [optional] 
**video_provider** | **str** |  | [optional] 
**webhook_events** | **List[str]** |  | [optional] 
**webhook_url** | **str** |  | [optional] 
**xiaomi_config** | [**XiaomiConfigRequest**](XiaomiConfigRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_app_request import UpdateAppRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateAppRequest from a JSON string
update_app_request_instance = UpdateAppRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateAppRequest.to_json())

# convert the object into a dict
update_app_request_dict = update_app_request_instance.to_dict()
# create an instance of UpdateAppRequest from a dict
update_app_request_from_dict = UpdateAppRequest.from_dict(update_app_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


