# FileShortcutDetails

Shortcut file details. Only populated for shortcut files, which have the mimeType field set to `application/vnd.google-apps.shortcut`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_id** | **str** | The ID of the file that this shortcut points to. | [optional] 
**target_mime_type** | **str** | Output only. The MIME type of the file that this shortcut points to. The value of this field is a snapshot of the target&#39;s MIME type, captured when the shortcut is created. | [optional] 
**target_resource_key** | **str** | Output only. The ResourceKey for the target file. | [optional] 

## Example

```python
from openapi_client.models.file_shortcut_details import FileShortcutDetails

# TODO update the JSON string below
json = "{}"
# create an instance of FileShortcutDetails from a JSON string
file_shortcut_details_instance = FileShortcutDetails.from_json(json)
# print the JSON string representation of the object
print(FileShortcutDetails.to_json())

# convert the object into a dict
file_shortcut_details_dict = file_shortcut_details_instance.to_dict()
# create an instance of FileShortcutDetails from a dict
file_shortcut_details_from_dict = FileShortcutDetails.from_dict(file_shortcut_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


