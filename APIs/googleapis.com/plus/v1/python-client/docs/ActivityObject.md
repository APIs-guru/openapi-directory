# ActivityObject

The object of this activity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actor** | [**ActivityObjectActor**](ActivityObjectActor.md) |  | [optional] 
**attachments** | [**List[ActivityObjectAttachmentsInner]**](ActivityObjectAttachmentsInner.md) | The media objects attached to this activity. | [optional] 
**content** | **str** | The HTML-formatted content, which is suitable for display. | [optional] 
**id** | **str** | The ID of the object. When resharing an activity, this is the ID of the activity that is being reshared. | [optional] 
**object_type** | **str** | The type of the object. Possible values include, but are not limited to, the following values:   - \&quot;note\&quot; - Textual content.  - \&quot;activity\&quot; - A Google+ activity. | [optional] 
**original_content** | **str** | The content (text) as provided by the author, which is stored without any HTML formatting. When creating or updating an activity, this value must be supplied as plain text in the request. | [optional] 
**plusoners** | [**ActivityObjectPlusoners**](ActivityObjectPlusoners.md) |  | [optional] 
**replies** | [**ActivityObjectReplies**](ActivityObjectReplies.md) |  | [optional] 
**resharers** | [**ActivityObjectResharers**](ActivityObjectResharers.md) |  | [optional] 
**url** | **str** | The URL that points to the linked resource. | [optional] 

## Example

```python
from openapi_client.models.activity_object import ActivityObject

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityObject from a JSON string
activity_object_instance = ActivityObject.from_json(json)
# print the JSON string representation of the object
print(ActivityObject.to_json())

# convert the object into a dict
activity_object_dict = activity_object_instance.to_dict()
# create an instance of ActivityObject from a dict
activity_object_from_dict = ActivityObject.from_dict(activity_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


