# AssetStaticRenditionsFilesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bitrate** | **int** | The bitrate in bits per second | [optional] 
**ext** | **str** | Extension of the static rendition file | [optional] 
**filesize** | **str** | The file size in bytes | [optional] 
**height** | **int** | The height of the static rendition&#39;s file in pixels | [optional] 
**name** | **str** |  | [optional] 
**width** | **int** | The width of the static rendition&#39;s file in pixels | [optional] 

## Example

```python
from openapi_client.models.asset_static_renditions_files_inner import AssetStaticRenditionsFilesInner

# TODO update the JSON string below
json = "{}"
# create an instance of AssetStaticRenditionsFilesInner from a JSON string
asset_static_renditions_files_inner_instance = AssetStaticRenditionsFilesInner.from_json(json)
# print the JSON string representation of the object
print(AssetStaticRenditionsFilesInner.to_json())

# convert the object into a dict
asset_static_renditions_files_inner_dict = asset_static_renditions_files_inner_instance.to_dict()
# create an instance of AssetStaticRenditionsFilesInner from a dict
asset_static_renditions_files_inner_from_dict = AssetStaticRenditionsFilesInner.from_dict(asset_static_renditions_files_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


