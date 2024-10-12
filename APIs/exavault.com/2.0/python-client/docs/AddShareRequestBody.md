# AddShareRequestBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_mode** | [**AccessMode**](AccessMode.md) |  | [optional] 
**embed** | **bool** | Whether this share can be embedded within a web page. | [optional] 
**expiration** | **datetime** | Expiration date for the share. If someone attempts to use the share after this date, they will receive an error that the share is not available. | [optional] 
**file_drop_create_folders** | **bool** | Only used for **receive** shares. If true, uploads will be automatically placed into sub-folders of the folder, named after the chosen field on your form.  | [optional] 
**has_notification** | **bool** | Whether delivery receipts should be sent. | [optional] 
**is_public** | **bool** | Whether someone can visit the share without following a personalized recipient link. | [optional] 
**message_body** | **str** | The message to be included in email invitations for your recipients. Ignored if you have not also provided &#x60;recipients&#x60; and &#x60;messageSubject&#x60; | [optional] 
**message_subject** | **str** | Subject to use on emails inviting recipients to the share. Ignored if you have not also provided &#x60;recipients&#x60; and a &#x60;messageBody&#x60; | [optional] 
**name** | **str** | A name for the share. This will be visible on the page that recipients visit.  | 
**notification_emails** | **List[str]** | Emails that will receive delivery receipts for this share. &#x60;hasNotification&#x60; must be **true** for delivery receipts will be sent. | [optional] 
**password** | **str** | Set a password for recipients to access the share. All recipients will use the same password. | [optional] 
**recipients** | [**List[AddShareRequestBodyRecipientsInner]**](AddShareRequestBodyRecipientsInner.md) | People you want to invite to the share. **Note**: unless you also set the &#x60;messageSubject&#x60; and &#x60;messageBody&#x60; for the new share, invitation emails will not be sent to these recipients. | [optional] 
**require_email** | **bool** | True if recipients must provide their email to view the share. | [optional] 
**resources** | **List[str]** | Array of resources for this share. See details on [how to specify resources](#section/Identifying-Resources) above.  **shared_folder** and **receive** shares must have only one &#x60;resource&#x60;, which is a directory that does not have a current share attached.  **send** shares may have multiple &#x60;resource&#x60; parameters. You can also leave this parameter null if you are planning to upload files to the send. If you are planning to upload files to the send that are not yet in your account, you will also need to call the [POST /shares/complete-send/{id}](#operation/completeDirectSend) endpoint to finish the send operation.  | [optional] 
**sending_local_files** | **bool** | Use this only for **send** shares. Flag to indicate that you are going to upload additional files from your computer to the share. If this is **true**, you will also need to use the [POST /shares/complete-send/{id}](#operation/completeDirectSend) call to finish setting up your share after the files are uploaded. | [optional] 
**type** | **str** | The type of share to create. See above for a description of each. | 

## Example

```python
from openapi_client.models.add_share_request_body import AddShareRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of AddShareRequestBody from a JSON string
add_share_request_body_instance = AddShareRequestBody.from_json(json)
# print the JSON string representation of the object
print(AddShareRequestBody.to_json())

# convert the object into a dict
add_share_request_body_dict = add_share_request_body_instance.to_dict()
# create an instance of AddShareRequestBody from a dict
add_share_request_body_from_dict = AddShareRequestBody.from_dict(add_share_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


