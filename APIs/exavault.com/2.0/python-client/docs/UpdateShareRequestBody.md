# UpdateShareRequestBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_mode** | [**AccessMode**](AccessMode.md) |  | [optional] 
**embed** | **bool** | Whether the share can be embedded in another web page. | [optional] 
**expiration** | **datetime** | New expiration date and time for the share | [optional] 
**file_drop_create_folders** | **bool** | Whether uploads to a receive folder should be automatically placed into subfolders. See our [receive folder documentation](/docs/account/05-file-sharing/05-form-builder#advanced-form-settings) | [optional] 
**has_notification** | **bool** | Whether delivery receipts should be sent for this share. | [optional] 
**is_public** | **bool** | Whether people can visit the share without following a link from an invitation email | [optional] 
**message_body** | **str** | Message content to use for emails inviting recipients to the share. Ignored if you have not also provided &#x60;recipients&#x60; and a &#x60;subject&#x60; | [optional] 
**message_subject** | **str** | Subject to use on emails inviting recipients to the share. Ignored if you have not also provided &#x60;recipients&#x60; and a &#x60;message&#x60; | [optional] 
**name** | **str** | Name of the share. | [optional] 
**notification_emails** | **List[str]** | List of email addresses to send delivery receipts to. Ignored if &#x60;hasNotification&#x60; is false.  | [optional] 
**password** | **str** | New password for the share. To leave the password unchanged, do not send this parameter. | [optional] 
**recipients** | [**List[AddShareRequestBodyRecipientsInner]**](AddShareRequestBodyRecipientsInner.md) | People you want to invite to the share.   **Note**: unless you also set the &#x60;subject&#x60; and &#x60;message&#x60; for the new share, invitation emails will not be sent to these recipients.  **Note**: Recipients in this list will **REPLACE** the recipients already assigned to this share.  | [optional] 
**require_email** | **bool** | Whether visitors to the share will be required to enter their email in order to access the share. | [optional] 
**resources** | **List[str]** | Array of resources for this share. See details on [how to specify resources](#section/Identifying-Resources) above.  **shared_folder** and **receive** shares must have only one &#x60;resource&#x60;, which is a directory that does not have a current share attached.  **send** shares may have multiple &#x60;resource&#x60; parameters.   **NOTE**: Sending this parameter will **REPLACE** the existing resources with the resources included in this request. | [optional] 
**status** | **int** | New status for the share. You can set an active share to inactive by setting the status to **0** | [optional] 

## Example

```python
from openapi_client.models.update_share_request_body import UpdateShareRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateShareRequestBody from a JSON string
update_share_request_body_instance = UpdateShareRequestBody.from_json(json)
# print the JSON string representation of the object
print(UpdateShareRequestBody.to_json())

# convert the object into a dict
update_share_request_body_dict = update_share_request_body_instance.to_dict()
# create an instance of UpdateShareRequestBody from a dict
update_share_request_body_from_dict = UpdateShareRequestBody.from_dict(update_share_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


