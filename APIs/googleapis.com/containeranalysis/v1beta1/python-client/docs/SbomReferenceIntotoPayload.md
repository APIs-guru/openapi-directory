# SbomReferenceIntotoPayload

The actual payload that contains the SBOM Reference data. The payload follows the intoto statement specification. See https://github.com/in-toto/attestation/blob/main/spec/v1.0/statement.md for more details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Identifier for the schema of the Statement. | [optional] 
**predicate** | [**SbomReferenceIntotoPredicate**](SbomReferenceIntotoPredicate.md) |  | [optional] 
**predicate_type** | **str** | URI identifying the type of the Predicate. | [optional] 
**subject** | [**List[Subject]**](Subject.md) | Set of software artifacts that the attestation applies to. Each element represents a single software artifact. | [optional] 

## Example

```python
from openapi_client.models.sbom_reference_intoto_payload import SbomReferenceIntotoPayload

# TODO update the JSON string below
json = "{}"
# create an instance of SbomReferenceIntotoPayload from a JSON string
sbom_reference_intoto_payload_instance = SbomReferenceIntotoPayload.from_json(json)
# print the JSON string representation of the object
print(SbomReferenceIntotoPayload.to_json())

# convert the object into a dict
sbom_reference_intoto_payload_dict = sbom_reference_intoto_payload_instance.to_dict()
# create an instance of SbomReferenceIntotoPayload from a dict
sbom_reference_intoto_payload_from_dict = SbomReferenceIntotoPayload.from_dict(sbom_reference_intoto_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


