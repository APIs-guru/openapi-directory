# BuildDetails

Message encapsulating build provenance details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**in_toto_slsa_provenance_v1** | [**InTotoSlsaProvenanceV1**](InTotoSlsaProvenanceV1.md) |  | [optional] 
**intoto_provenance** | [**InTotoProvenance**](InTotoProvenance.md) |  | [optional] 
**intoto_statement** | [**InTotoStatement**](InTotoStatement.md) |  | [optional] 
**provenance** | [**BuildProvenance**](BuildProvenance.md) |  | [optional] 
**provenance_bytes** | **str** | Serialized JSON representation of the provenance, used in generating the &#x60;BuildSignature&#x60; in the corresponding Result. After verifying the signature, &#x60;provenance_bytes&#x60; can be unmarshalled and compared to the provenance to confirm that it is unchanged. A base64-encoded string representation of the provenance bytes is used for the signature in order to interoperate with openssl which expects this format for signature verification. The serialized form is captured both to avoid ambiguity in how the provenance is marshalled to json as well to prevent incompatibilities with future changes. | [optional] 

## Example

```python
from openapi_client.models.build_details import BuildDetails

# TODO update the JSON string below
json = "{}"
# create an instance of BuildDetails from a JSON string
build_details_instance = BuildDetails.from_json(json)
# print the JSON string representation of the object
print(BuildDetails.to_json())

# convert the object into a dict
build_details_dict = build_details_instance.to_dict()
# create an instance of BuildDetails from a dict
build_details_from_dict = BuildDetails.from_dict(build_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


