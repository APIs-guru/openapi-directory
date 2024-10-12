# SplitApkMetadata

Holds data specific to Split APKs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_master_split** | **bool** | Indicates whether this APK is the main split of the module. | [optional] 
**split_id** | **str** | Id of the split. | [optional] 

## Example

```python
from openapi_client.models.split_apk_metadata import SplitApkMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of SplitApkMetadata from a JSON string
split_apk_metadata_instance = SplitApkMetadata.from_json(json)
# print the JSON string representation of the object
print(SplitApkMetadata.to_json())

# convert the object into a dict
split_apk_metadata_dict = split_apk_metadata_instance.to_dict()
# create an instance of SplitApkMetadata from a dict
split_apk_metadata_from_dict = SplitApkMetadata.from_dict(split_apk_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


