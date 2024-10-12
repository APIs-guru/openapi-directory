# MediaFiles


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PAMAssetCategoriesAllOfLinks**](PAMAssetCategoriesAllOfLinks.md) |  | [optional] 
**current_page** | **int** | Current page number | [optional] 
**embedded** | [**MediaFilesAllOfEmbedded**](MediaFilesAllOfEmbedded.md) |  | [optional] 

## Example

```python
from openapi_client.models.media_files import MediaFiles

# TODO update the JSON string below
json = "{}"
# create an instance of MediaFiles from a JSON string
media_files_instance = MediaFiles.from_json(json)
# print the JSON string representation of the object
print(MediaFiles.to_json())

# convert the object into a dict
media_files_dict = media_files_instance.to_dict()
# create an instance of MediaFiles from a dict
media_files_from_dict = MediaFiles.from_dict(media_files_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


