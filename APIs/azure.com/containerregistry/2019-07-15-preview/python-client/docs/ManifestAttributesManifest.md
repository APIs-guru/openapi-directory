# ManifestAttributesManifest

List of manifest attributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quarantine_tag** | **str** | Quarantine tag name | [optional] 
**references** | [**List[ManifestAttributesManifestReferences]**](ManifestAttributesManifestReferences.md) | List of manifest attributes details | [optional] 

## Example

```python
from openapi_client.models.manifest_attributes_manifest import ManifestAttributesManifest

# TODO update the JSON string below
json = "{}"
# create an instance of ManifestAttributesManifest from a JSON string
manifest_attributes_manifest_instance = ManifestAttributesManifest.from_json(json)
# print the JSON string representation of the object
print(ManifestAttributesManifest.to_json())

# convert the object into a dict
manifest_attributes_manifest_dict = manifest_attributes_manifest_instance.to_dict()
# create an instance of ManifestAttributesManifest from a dict
manifest_attributes_manifest_from_dict = ManifestAttributesManifest.from_dict(manifest_attributes_manifest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


