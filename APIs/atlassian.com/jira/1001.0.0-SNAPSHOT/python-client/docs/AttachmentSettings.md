# AttachmentSettings

Details of the instance's attachment settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether the ability to add attachments is enabled. | [optional] [readonly] 
**upload_limit** | **int** | The maximum size of attachments permitted, in bytes. | [optional] [readonly] 

## Example

```python
from openapi_client.models.attachment_settings import AttachmentSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AttachmentSettings from a JSON string
attachment_settings_instance = AttachmentSettings.from_json(json)
# print the JSON string representation of the object
print(AttachmentSettings.to_json())

# convert the object into a dict
attachment_settings_dict = attachment_settings_instance.to_dict()
# create an instance of AttachmentSettings from a dict
attachment_settings_from_dict = AttachmentSettings.from_dict(attachment_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


