# Attachment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **float** | The creation time of the attachment. | [optional] 
**creator_id** | **str** | The id of the creator of the attachment. | [optional] 
**delete_url** | **str** | The delete URL of the attachment. | [optional] 
**file_id** | **str** | The id of the attachment file. | [optional] 
**file_name** | **str** | The name of the attachment file. | [optional] 
**item_id** | **str** | The item id to which the attachment is attached. | [optional] 
**mime_type** | **str** | The mime type of the attachment file. | [optional] 
**modification_time** | **float** | The modification time of the attachment. | [optional] 
**size** | **float** | The size of the attachment file. | [optional] 
**url** | **str** | The URL of the attachment. | [optional] 

## Example

```python
from openapi_client.models.attachment import Attachment

# TODO update the JSON string below
json = "{}"
# create an instance of Attachment from a JSON string
attachment_instance = Attachment.from_json(json)
# print the JSON string representation of the object
print(Attachment.to_json())

# convert the object into a dict
attachment_dict = attachment_instance.to_dict()
# create an instance of Attachment from a dict
attachment_from_dict = Attachment.from_dict(attachment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


