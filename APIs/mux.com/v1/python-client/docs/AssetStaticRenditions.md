# AssetStaticRenditions

An object containing the current status of any static renditions (mp4s). The object does not exist if no static renditions have been requested. See [Download your videos](https://docs.mux.com/guides/video/download-your-videos) for more information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**files** | [**List[AssetStaticRenditionsFilesInner]**](AssetStaticRenditionsFilesInner.md) | Array of file objects. | [optional] 
**status** | **str** | Indicates the status of downloadable MP4 versions of this asset. | [optional] [default to 'disabled']

## Example

```python
from openapi_client.models.asset_static_renditions import AssetStaticRenditions

# TODO update the JSON string below
json = "{}"
# create an instance of AssetStaticRenditions from a JSON string
asset_static_renditions_instance = AssetStaticRenditions.from_json(json)
# print the JSON string representation of the object
print(AssetStaticRenditions.to_json())

# convert the object into a dict
asset_static_renditions_dict = asset_static_renditions_instance.to_dict()
# create an instance of AssetStaticRenditions from a dict
asset_static_renditions_from_dict = AssetStaticRenditions.from_dict(asset_static_renditions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


