# Label

Labels are used to categorize messages and threads within the user's mailbox. The maximum number of labels supported for a user's mailbox is 10,000.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | [**LabelColor**](LabelColor.md) |  | [optional] 
**id** | **str** | The immutable ID of the label. | [optional] 
**label_list_visibility** | **str** | The visibility of the label in the label list in the Gmail web interface. | [optional] 
**message_list_visibility** | **str** | The visibility of messages with this label in the message list in the Gmail web interface. | [optional] 
**messages_total** | **int** | The total number of messages with the label. | [optional] 
**messages_unread** | **int** | The number of unread messages with the label. | [optional] 
**name** | **str** | The display name of the label. | [optional] 
**threads_total** | **int** | The total number of threads with the label. | [optional] 
**threads_unread** | **int** | The number of unread threads with the label. | [optional] 
**type** | **str** | The owner type for the label. User labels are created by the user and can be modified and deleted by the user and can be applied to any message or thread. System labels are internally created and cannot be added, modified, or deleted. System labels may be able to be applied to or removed from messages and threads under some circumstances but this is not guaranteed. For example, users can apply and remove the &#x60;INBOX&#x60; and &#x60;UNREAD&#x60; labels from messages and threads, but cannot apply or remove the &#x60;DRAFTS&#x60; or &#x60;SENT&#x60; labels from messages or threads. | [optional] 

## Example

```python
from openapi_client.models.label import Label

# TODO update the JSON string below
json = "{}"
# create an instance of Label from a JSON string
label_instance = Label.from_json(json)
# print the JSON string representation of the object
print(Label.to_json())

# convert the object into a dict
label_dict = label_instance.to_dict()
# create an instance of Label from a dict
label_from_dict = Label.from_dict(label_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


