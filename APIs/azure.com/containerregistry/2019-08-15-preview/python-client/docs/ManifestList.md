# ManifestList

Returns the requested Docker multi-arch-manifest file

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**manifests** | [**List[ManifestListAttributes]**](ManifestListAttributes.md) | List of V2 image layer information | [optional] 
**media_type** | **str** | Media type for this Manifest | [optional] 
**schema_version** | **int** | Schema version | [optional] 

## Example

```python
from openapi_client.models.manifest_list import ManifestList

# TODO update the JSON string below
json = "{}"
# create an instance of ManifestList from a JSON string
manifest_list_instance = ManifestList.from_json(json)
# print the JSON string representation of the object
print(ManifestList.to_json())

# convert the object into a dict
manifest_list_dict = manifest_list_instance.to_dict()
# create an instance of ManifestList from a dict
manifest_list_from_dict = ManifestList.from_dict(manifest_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


