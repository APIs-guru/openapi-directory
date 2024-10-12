# ApkDescription

Description of the created apks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_slice_metadata** | [**SplitApkMetadata**](SplitApkMetadata.md) |  | [optional] 
**instant_apk_metadata** | [**SplitApkMetadata**](SplitApkMetadata.md) |  | [optional] 
**path** | **str** | Path of the Apk, will be in the following format: .apk where DownloadId is the ID used to download the apk using GeneratedApks.Download API. | [optional] 
**split_apk_metadata** | [**SplitApkMetadata**](SplitApkMetadata.md) |  | [optional] 
**standalone_apk_metadata** | [**StandaloneApkMetadata**](StandaloneApkMetadata.md) |  | [optional] 
**targeting** | [**ApkTargeting**](ApkTargeting.md) |  | [optional] 

## Example

```python
from openapi_client.models.apk_description import ApkDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ApkDescription from a JSON string
apk_description_instance = ApkDescription.from_json(json)
# print the JSON string representation of the object
print(ApkDescription.to_json())

# convert the object into a dict
apk_description_dict = apk_description_instance.to_dict()
# create an instance of ApkDescription from a dict
apk_description_from_dict = ApkDescription.from_dict(apk_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


