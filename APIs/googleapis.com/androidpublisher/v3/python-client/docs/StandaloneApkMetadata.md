# StandaloneApkMetadata

Holds data specific to Standalone APKs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fused_module_name** | **List[str]** | Names of the modules fused in this standalone APK. | [optional] 

## Example

```python
from openapi_client.models.standalone_apk_metadata import StandaloneApkMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of StandaloneApkMetadata from a JSON string
standalone_apk_metadata_instance = StandaloneApkMetadata.from_json(json)
# print the JSON string representation of the object
print(StandaloneApkMetadata.to_json())

# convert the object into a dict
standalone_apk_metadata_dict = standalone_apk_metadata_instance.to_dict()
# create an instance of StandaloneApkMetadata from a dict
standalone_apk_metadata_from_dict = StandaloneApkMetadata.from_dict(standalone_apk_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


