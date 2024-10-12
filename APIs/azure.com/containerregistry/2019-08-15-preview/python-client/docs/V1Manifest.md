# V1Manifest

Returns the requested V1 manifest file

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**architecture** | **str** | CPU architecture | [optional] 
**fs_layers** | [**List[FsLayer]**](FsLayer.md) | List of layer information | [optional] 
**history** | [**List[History]**](History.md) | Image history | [optional] 
**name** | **str** | Image name | [optional] 
**signatures** | [**List[ImageSignature]**](ImageSignature.md) | Image signature | [optional] 
**tag** | **str** | Image tag | [optional] 
**schema_version** | **int** | Schema version | [optional] 

## Example

```python
from openapi_client.models.v1_manifest import V1Manifest

# TODO update the JSON string below
json = "{}"
# create an instance of V1Manifest from a JSON string
v1_manifest_instance = V1Manifest.from_json(json)
# print the JSON string representation of the object
print(V1Manifest.to_json())

# convert the object into a dict
v1_manifest_dict = v1_manifest_instance.to_dict()
# create an instance of V1Manifest from a dict
v1_manifest_from_dict = V1Manifest.from_dict(v1_manifest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


