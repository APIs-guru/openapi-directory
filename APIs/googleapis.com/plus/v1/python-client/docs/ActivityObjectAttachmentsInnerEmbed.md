# ActivityObjectAttachmentsInnerEmbed

If the attachment is a video, the embeddable link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Media type of the link. | [optional] 
**url** | **str** | URL of the link. | [optional] 

## Example

```python
from openapi_client.models.activity_object_attachments_inner_embed import ActivityObjectAttachmentsInnerEmbed

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityObjectAttachmentsInnerEmbed from a JSON string
activity_object_attachments_inner_embed_instance = ActivityObjectAttachmentsInnerEmbed.from_json(json)
# print the JSON string representation of the object
print(ActivityObjectAttachmentsInnerEmbed.to_json())

# convert the object into a dict
activity_object_attachments_inner_embed_dict = activity_object_attachments_inner_embed_instance.to_dict()
# create an instance of ActivityObjectAttachmentsInnerEmbed from a dict
activity_object_attachments_inner_embed_from_dict = ActivityObjectAttachmentsInnerEmbed.from_dict(activity_object_attachments_inner_embed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


