# ApiV2CddriveFoldersFolderIdItemsGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[CDDriveItem]**](CDDriveItem.md) | The item instances. | [optional] 
**limit** | **int** | The maximum number of items to return. | [optional] 
**offset** | **int** | The start offset into the items. | [optional] 
**total_count** | **int** | The total number of entries available. | [optional] 

## Example

```python
from openapi_client.models.api_v2_cddrive_folders_folder_id_items_get200_response import ApiV2CddriveFoldersFolderIdItemsGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV2CddriveFoldersFolderIdItemsGet200Response from a JSON string
api_v2_cddrive_folders_folder_id_items_get200_response_instance = ApiV2CddriveFoldersFolderIdItemsGet200Response.from_json(json)
# print the JSON string representation of the object
print(ApiV2CddriveFoldersFolderIdItemsGet200Response.to_json())

# convert the object into a dict
api_v2_cddrive_folders_folder_id_items_get200_response_dict = api_v2_cddrive_folders_folder_id_items_get200_response_instance.to_dict()
# create an instance of ApiV2CddriveFoldersFolderIdItemsGet200Response from a dict
api_v2_cddrive_folders_folder_id_items_get200_response_from_dict = ApiV2CddriveFoldersFolderIdItemsGet200Response.from_dict(api_v2_cddrive_folders_folder_id_items_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


