# AttachmentFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Unique identifier of the attachment | [optional] 
**url** | **str** | Private URL of the attachment | [optional] 

## Example

```python
from openapi_client.models.attachment_fields import AttachmentFields

# TODO update the JSON string below
json = "{}"
# create an instance of AttachmentFields from a JSON string
attachment_fields_instance = AttachmentFields.from_json(json)
# print the JSON string representation of the object
print(AttachmentFields.to_json())

# convert the object into a dict
attachment_fields_dict = attachment_fields_instance.to_dict()
# create an instance of AttachmentFields from a dict
attachment_fields_from_dict = AttachmentFields.from_dict(attachment_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


