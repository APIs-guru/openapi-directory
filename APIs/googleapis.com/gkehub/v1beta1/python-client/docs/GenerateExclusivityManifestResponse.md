# GenerateExclusivityManifestResponse

The response of the exclusivity artifacts manifests for the client to apply.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cr_manifest** | **str** | The YAML manifest of the membership CR to apply if a new version of the CR is available. Empty if no update needs to be applied. | [optional] 
**crd_manifest** | **str** | The YAML manifest of the membership CRD to apply if a newer version of the CRD is available. Empty if no update needs to be applied. | [optional] 

## Example

```python
from openapi_client.models.generate_exclusivity_manifest_response import GenerateExclusivityManifestResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateExclusivityManifestResponse from a JSON string
generate_exclusivity_manifest_response_instance = GenerateExclusivityManifestResponse.from_json(json)
# print the JSON string representation of the object
print(GenerateExclusivityManifestResponse.to_json())

# convert the object into a dict
generate_exclusivity_manifest_response_dict = generate_exclusivity_manifest_response_instance.to_dict()
# create an instance of GenerateExclusivityManifestResponse from a dict
generate_exclusivity_manifest_response_from_dict = GenerateExclusivityManifestResponse.from_dict(generate_exclusivity_manifest_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


