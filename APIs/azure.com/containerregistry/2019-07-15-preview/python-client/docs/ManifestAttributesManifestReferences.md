# ManifestAttributesManifestReferences

Manifest attributes details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**architecture** | **str** | CPU architecture | [optional] 
**digest** | **str** | Manifest digest | [optional] 
**os** | **str** | Operating system | [optional] 

## Example

```python
from openapi_client.models.manifest_attributes_manifest_references import ManifestAttributesManifestReferences

# TODO update the JSON string below
json = "{}"
# create an instance of ManifestAttributesManifestReferences from a JSON string
manifest_attributes_manifest_references_instance = ManifestAttributesManifestReferences.from_json(json)
# print the JSON string representation of the object
print(ManifestAttributesManifestReferences.to_json())

# convert the object into a dict
manifest_attributes_manifest_references_dict = manifest_attributes_manifest_references_instance.to_dict()
# create an instance of ManifestAttributesManifestReferences from a dict
manifest_attributes_manifest_references_from_dict = ManifestAttributesManifestReferences.from_dict(manifest_attributes_manifest_references_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


