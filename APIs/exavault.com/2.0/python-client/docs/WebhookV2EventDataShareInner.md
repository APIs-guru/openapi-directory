# WebhookV2EventDataShareInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_description** | **str** | Human readable description of what visitors are allowed to do with the receive folder | [optional] 
**access_mode** | [**AccessMode**](AccessMode.md) |  | [optional] 
**assets** | **List[str]** | List of items included in the share | [optional] 
**created** | **datetime** | Date and ti | [optional] 
**embed** | **bool** | Whether the receive folder can be embedded within a web page | [optional] 
**expiration** | **str** | Date and time when the receive folder will no longer be  | [optional] 
**expired** | **bool** | Whether access to the receive folder has expired | [optional] 
**file_drop_create_folders** | **bool** | Whether files should be automatically placed in subfolders of the receive folder | [optional] 
**form_id** | **int** | ID of the associated form | [optional] 
**has_notification** | **bool** | Whether delivery receipts are enabled for this share | [optional] 
**has_password** | **bool** | Whether the receive folder requires visitors to enter a password | [optional] 
**hash** | **str** | Hash value of the receive | [optional] 
**id** | **int** | Unique ID of associated receive folder | [optional] 
**inherited** | **bool** | Whether this share is inherited from a parent fol | [optional] 
**is_public** | **bool** | Whether visitors can acccess the receive folder without an invitation link | [optional] 
**messages** | [**List[ShareMessage]**](ShareMessage.md) | Invitation messages sent for receive folder | [optional] 
**modified** | **datetime** | Date and time when the share was last changed | [optional] 
**name** | **str** | Name of receiv | [optional] 
**owner_hash** | **str** | Hash value of the user who \&quot;owns\&quot; the receive fo | [optional] 
**paths** | **List[str]** | List | [optional] 
**recipients** | [**List[ShareRecipient]**](ShareRecipient.md) | List of recipients invited  to the receive folder | [optional] 
**require_email** | **bool** | Whether visitors must enter their email addresses to access the receive folder | [optional] 
**resent** | **bool** | Whether invitations to the receive folder have been re-sent to recipients | [optional] 
**status** | **int** | 1 if share is active. 0 if not. | [optional] 
**tracking_status** | **str** | Status of invitations sent for this receive folder | [optional] 
**type** | **str** | Type of share **\&quot;receive\&quot;** | [optional] 

## Example

```python
from openapi_client.models.webhook_v2_event_data_share_inner import WebhookV2EventDataShareInner

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookV2EventDataShareInner from a JSON string
webhook_v2_event_data_share_inner_instance = WebhookV2EventDataShareInner.from_json(json)
# print the JSON string representation of the object
print(WebhookV2EventDataShareInner.to_json())

# convert the object into a dict
webhook_v2_event_data_share_inner_dict = webhook_v2_event_data_share_inner_instance.to_dict()
# create an instance of WebhookV2EventDataShareInner from a dict
webhook_v2_event_data_share_inner_from_dict = WebhookV2EventDataShareInner.from_dict(webhook_v2_event_data_share_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


