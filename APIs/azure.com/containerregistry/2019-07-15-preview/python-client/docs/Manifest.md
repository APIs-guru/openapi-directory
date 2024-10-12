# Manifest

Returns the requested manifest file

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**architecture** | **str** | CPU architecture | [optional] 
**config** | [**V2Descriptor**](V2Descriptor.md) |  | [optional] 
**fs_layers** | [**List[FsLayer]**](FsLayer.md) | List of layer information | [optional] 
**history** | [**List[History]**](History.md) | Image history | [optional] 
**layers** | [**List[V2Descriptor]**](V2Descriptor.md) | List of V2 image layer information | [optional] 
**media_type** | **str** | Media type usually application/vnd.docker.distribution.manifest.v2+json if this is in the accept header | [optional] 
**name** | **str** | Image name | [optional] 
**schema_version** | **int** | Schema version | [optional] 
**signatures** | [**List[ImageSignature]**](ImageSignature.md) | Image signature | [optional] 
**tag** | **str** | Image tag | [optional] 

## Example

```python
from openapi_client.models.manifest import Manifest

# TODO update the JSON string below
json = "{}"
# create an instance of Manifest from a JSON string
manifest_instance = Manifest.from_json(json)
# print the JSON string representation of the object
print(Manifest.to_json())

# convert the object into a dict
manifest_dict = manifest_instance.to_dict()
# create an instance of Manifest from a dict
manifest_from_dict = Manifest.from_dict(manifest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


