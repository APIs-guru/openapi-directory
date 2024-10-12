# GrafeasV1beta1BuildDetails

Details of a build occurrence.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**in_toto_slsa_provenance_v1** | [**InTotoSlsaProvenanceV1**](InTotoSlsaProvenanceV1.md) |  | [optional] 
**provenance** | [**BuildProvenance**](BuildProvenance.md) |  | [optional] 
**provenance_bytes** | **str** | Serialized JSON representation of the provenance, used in generating the build signature in the corresponding build note. After verifying the signature, &#x60;provenance_bytes&#x60; can be unmarshalled and compared to the provenance to confirm that it is unchanged. A base64-encoded string representation of the provenance bytes is used for the signature in order to interoperate with openssl which expects this format for signature verification. The serialized form is captured both to avoid ambiguity in how the provenance is marshalled to json as well to prevent incompatibilities with future changes. | [optional] 

## Example

```python
from openapi_client.models.grafeas_v1beta1_build_details import GrafeasV1beta1BuildDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GrafeasV1beta1BuildDetails from a JSON string
grafeas_v1beta1_build_details_instance = GrafeasV1beta1BuildDetails.from_json(json)
# print the JSON string representation of the object
print(GrafeasV1beta1BuildDetails.to_json())

# convert the object into a dict
grafeas_v1beta1_build_details_dict = grafeas_v1beta1_build_details_instance.to_dict()
# create an instance of GrafeasV1beta1BuildDetails from a dict
grafeas_v1beta1_build_details_from_dict = GrafeasV1beta1BuildDetails.from_dict(grafeas_v1beta1_build_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


