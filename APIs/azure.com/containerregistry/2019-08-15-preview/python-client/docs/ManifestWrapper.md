# ManifestWrapper

Returns the requested manifest file

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | [**Annotations**](Annotations.md) |  | [optional] 
**architecture** | **str** | (V1) CPU architecture | [optional] 
**config** | [**Descriptor**](Descriptor.md) |  | [optional] 
**fs_layers** | [**List[FsLayer]**](FsLayer.md) | (V1) List of layer information | [optional] 
**history** | [**List[History]**](History.md) | (V1) Image history | [optional] 
**layers** | [**List[Descriptor]**](Descriptor.md) | (V2, OCI) List of V2 image layer information | [optional] 
**manifests** | [**List[ManifestListAttributes]**](ManifestListAttributes.md) | (ManifestList, OCIIndex) List of V2 image layer information | [optional] 
**media_type** | **str** | Media type for this Manifest | [optional] 
**name** | **str** | (V1) Image name | [optional] 
**signatures** | [**List[ImageSignature]**](ImageSignature.md) | (V1) Image signature | [optional] 
**tag** | **str** | (V1) Image tag | [optional] 
**schema_version** | **int** | Schema version | [optional] 

## Example

```python
from openapi_client.models.manifest_wrapper import ManifestWrapper

# TODO update the JSON string below
json = "{}"
# create an instance of ManifestWrapper from a JSON string
manifest_wrapper_instance = ManifestWrapper.from_json(json)
# print the JSON string representation of the object
print(ManifestWrapper.to_json())

# convert the object into a dict
manifest_wrapper_dict = manifest_wrapper_instance.to_dict()
# create an instance of ManifestWrapper from a dict
manifest_wrapper_from_dict = ManifestWrapper.from_dict(manifest_wrapper_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


