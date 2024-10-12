# MoveFolderMetadata

Metadata pertaining to the folder move process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_parent** | **str** | The resource name of the folder or organization to move the folder to. | [optional] 
**display_name** | **str** | The display name of the folder. | [optional] 
**source_parent** | **str** | The resource name of the folder&#39;s parent. | [optional] 

## Example

```python
from openapi_client.models.move_folder_metadata import MoveFolderMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of MoveFolderMetadata from a JSON string
move_folder_metadata_instance = MoveFolderMetadata.from_json(json)
# print the JSON string representation of the object
print(MoveFolderMetadata.to_json())

# convert the object into a dict
move_folder_metadata_dict = move_folder_metadata_instance.to_dict()
# create an instance of MoveFolderMetadata from a dict
move_folder_metadata_from_dict = MoveFolderMetadata.from_dict(move_folder_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


