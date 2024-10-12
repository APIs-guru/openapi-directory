# AttachmentEditFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filename** | **str** | Filename of the attachment (with file extensison) | [optional] 
**url** | **str** | Public accessible URL with the desired file contents. (LIMIT: 100MB) | [optional] 

## Example

```python
from openapi_client.models.attachment_edit_fields import AttachmentEditFields

# TODO update the JSON string below
json = "{}"
# create an instance of AttachmentEditFields from a JSON string
attachment_edit_fields_instance = AttachmentEditFields.from_json(json)
# print the JSON string representation of the object
print(AttachmentEditFields.to_json())

# convert the object into a dict
attachment_edit_fields_dict = attachment_edit_fields_instance.to_dict()
# create an instance of AttachmentEditFields from a dict
attachment_edit_fields_from_dict = AttachmentEditFields.from_dict(attachment_edit_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


