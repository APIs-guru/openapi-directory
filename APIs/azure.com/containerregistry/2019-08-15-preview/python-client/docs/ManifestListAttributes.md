# ManifestListAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**digest** | **str** | The digest of the content, as defined by the Registry V2 HTTP API Specification | [optional] 
**media_type** | **str** | The MIME type of the referenced object. This will generally be application/vnd.docker.image.manifest.v2+json, but it could also be application/vnd.docker.image.manifest.v1+json | [optional] 
**platform** | [**Platform**](Platform.md) |  | [optional] 
**size** | **int** | The size in bytes of the object | [optional] 

## Example

```python
from openapi_client.models.manifest_list_attributes import ManifestListAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ManifestListAttributes from a JSON string
manifest_list_attributes_instance = ManifestListAttributes.from_json(json)
# print the JSON string representation of the object
print(ManifestListAttributes.to_json())

# convert the object into a dict
manifest_list_attributes_dict = manifest_list_attributes_instance.to_dict()
# create an instance of ManifestListAttributes from a dict
manifest_list_attributes_from_dict = ManifestListAttributes.from_dict(manifest_list_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


