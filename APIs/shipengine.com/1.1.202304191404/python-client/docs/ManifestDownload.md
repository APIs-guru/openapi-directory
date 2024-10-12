# ManifestDownload

Object containing the href link to download the manifest file

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | The URL of the linked resource, if any | [optional] 

## Example

```python
from openapi_client.models.manifest_download import ManifestDownload

# TODO update the JSON string below
json = "{}"
# create an instance of ManifestDownload from a JSON string
manifest_download_instance = ManifestDownload.from_json(json)
# print the JSON string representation of the object
print(ManifestDownload.to_json())

# convert the object into a dict
manifest_download_dict = manifest_download_instance.to_dict()
# create an instance of ManifestDownload from a dict
manifest_download_from_dict = ManifestDownload.from_dict(manifest_download_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


