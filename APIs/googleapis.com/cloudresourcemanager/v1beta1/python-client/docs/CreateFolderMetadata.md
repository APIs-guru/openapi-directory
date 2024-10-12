# CreateFolderMetadata

Metadata pertaining to the Folder creation process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name of the folder. | [optional] 
**parent** | **str** | The resource name of the folder or organization we are creating the folder under. | [optional] 

## Example

```python
from openapi_client.models.create_folder_metadata import CreateFolderMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of CreateFolderMetadata from a JSON string
create_folder_metadata_instance = CreateFolderMetadata.from_json(json)
# print the JSON string representation of the object
print(CreateFolderMetadata.to_json())

# convert the object into a dict
create_folder_metadata_dict = create_folder_metadata_instance.to_dict()
# create an instance of CreateFolderMetadata from a dict
create_folder_metadata_from_dict = CreateFolderMetadata.from_dict(create_folder_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


