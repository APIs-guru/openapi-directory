# AttachmentEntityWrite


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Created At | [optional] 
**description** | **str** | Description | [optional] 
**link** | **str** | Link | [optional] 
**mime_type** | **str** | Mime Type | [optional] 
**name** | **str** | Name | [optional] 
**relation** | [**Relation**](Relation.md) |  | [optional] 
**size** | **int** | Size (in bytes) | [optional] 
**title** | **str** | Title | [optional] 
**updated_at** | **datetime** | Updated At | [optional] 

## Example

```python
from openapi_client.models.attachment_entity_write import AttachmentEntityWrite

# TODO update the JSON string below
json = "{}"
# create an instance of AttachmentEntityWrite from a JSON string
attachment_entity_write_instance = AttachmentEntityWrite.from_json(json)
# print the JSON string representation of the object
print(AttachmentEntityWrite.to_json())

# convert the object into a dict
attachment_entity_write_dict = attachment_entity_write_instance.to_dict()
# create an instance of AttachmentEntityWrite from a dict
attachment_entity_write_from_dict = AttachmentEntityWrite.from_dict(attachment_entity_write_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


