# OCIManifest

Returns the requested OCI Manifest file

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | [**Annotations**](Annotations.md) |  | [optional] 
**config** | [**Descriptor**](Descriptor.md) |  | [optional] 
**layers** | [**List[Descriptor]**](Descriptor.md) | List of V2 image layer information | [optional] 
**schema_version** | **int** | Schema version | [optional] 

## Example

```python
from openapi_client.models.oci_manifest import OCIManifest

# TODO update the JSON string below
json = "{}"
# create an instance of OCIManifest from a JSON string
oci_manifest_instance = OCIManifest.from_json(json)
# print the JSON string representation of the object
print(OCIManifest.to_json())

# convert the object into a dict
oci_manifest_dict = oci_manifest_instance.to_dict()
# create an instance of OCIManifest from a dict
oci_manifest_from_dict = OCIManifest.from_dict(oci_manifest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


