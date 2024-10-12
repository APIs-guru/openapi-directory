# ObjsMessageAttachmentsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fallback** | **str** |  | [optional] 
**id** | **int** |  | 
**image_bytes** | **int** |  | [optional] 
**image_height** | **int** |  | [optional] 
**image_url** | **str** |  | [optional] 
**image_width** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.objs_message_attachments_inner import ObjsMessageAttachmentsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ObjsMessageAttachmentsInner from a JSON string
objs_message_attachments_inner_instance = ObjsMessageAttachmentsInner.from_json(json)
# print the JSON string representation of the object
print(ObjsMessageAttachmentsInner.to_json())

# convert the object into a dict
objs_message_attachments_inner_dict = objs_message_attachments_inner_instance.to_dict()
# create an instance of ObjsMessageAttachmentsInner from a dict
objs_message_attachments_inner_from_dict = ObjsMessageAttachmentsInner.from_dict(objs_message_attachments_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


