# AttachmentRelation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | [**AttachmentEntityRelation**](AttachmentEntityRelation.md) |  | [optional] 
**type** | **str** | Type | [optional] 

## Example

```python
from openapi_client.models.attachment_relation import AttachmentRelation

# TODO update the JSON string below
json = "{}"
# create an instance of AttachmentRelation from a JSON string
attachment_relation_instance = AttachmentRelation.from_json(json)
# print the JSON string representation of the object
print(AttachmentRelation.to_json())

# convert the object into a dict
attachment_relation_dict = attachment_relation_instance.to_dict()
# create an instance of AttachmentRelation from a dict
attachment_relation_from_dict = AttachmentRelation.from_dict(attachment_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


