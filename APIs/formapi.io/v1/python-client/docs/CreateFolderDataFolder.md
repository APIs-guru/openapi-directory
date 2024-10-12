# CreateFolderDataFolder


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**parent_folder_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.create_folder_data_folder import CreateFolderDataFolder

# TODO update the JSON string below
json = "{}"
# create an instance of CreateFolderDataFolder from a JSON string
create_folder_data_folder_instance = CreateFolderDataFolder.from_json(json)
# print the JSON string representation of the object
print(CreateFolderDataFolder.to_json())

# convert the object into a dict
create_folder_data_folder_dict = create_folder_data_folder_instance.to_dict()
# create an instance of CreateFolderDataFolder from a dict
create_folder_data_folder_from_dict = CreateFolderDataFolder.from_dict(create_folder_data_folder_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


