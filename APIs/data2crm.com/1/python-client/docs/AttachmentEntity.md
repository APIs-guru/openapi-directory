# AttachmentEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Created At | [optional] 
**description** | **str** | Description | [optional] 
**id** | **str** | Attachment Identifier | [optional] 
**link** | **str** | Link | [optional] 
**mime_type** | **str** | Mime Type | [optional] 
**name** | **str** | Name | [optional] 
**relation** | [**Relation**](Relation.md) |  | [optional] 
**size** | **int** | Size (in bytes) | [optional] 
**title** | **str** | Title | [optional] 
**updated_at** | **datetime** | Updated At | [optional] 

## Example

```python
from openapi_client.models.attachment_entity import AttachmentEntity

# TODO update the JSON string below
json = "{}"
# create an instance of AttachmentEntity from a JSON string
attachment_entity_instance = AttachmentEntity.from_json(json)
# print the JSON string representation of the object
print(AttachmentEntity.to_json())

# convert the object into a dict
attachment_entity_dict = attachment_entity_instance.to_dict()
# create an instance of AttachmentEntity from a dict
attachment_entity_from_dict = AttachmentEntity.from_dict(attachment_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


