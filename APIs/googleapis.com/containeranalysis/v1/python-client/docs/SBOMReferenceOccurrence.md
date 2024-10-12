# SBOMReferenceOccurrence

The occurrence representing an SBOM reference as applied to a specific resource. The occurrence follows the DSSE specification. See https://github.com/secure-systems-lab/dsse/blob/master/envelope.md for more details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payload** | [**SbomReferenceIntotoPayload**](SbomReferenceIntotoPayload.md) |  | [optional] 
**payload_type** | **str** | The kind of payload that SbomReferenceIntotoPayload takes. Since it&#39;s in the intoto format, this value is expected to be &#39;application/vnd.in-toto+json&#39;. | [optional] 
**signatures** | [**List[EnvelopeSignature]**](EnvelopeSignature.md) | The signatures over the payload. | [optional] 

## Example

```python
from openapi_client.models.sbom_reference_occurrence import SBOMReferenceOccurrence

# TODO update the JSON string below
json = "{}"
# create an instance of SBOMReferenceOccurrence from a JSON string
sbom_reference_occurrence_instance = SBOMReferenceOccurrence.from_json(json)
# print the JSON string representation of the object
print(SBOMReferenceOccurrence.to_json())

# convert the object into a dict
sbom_reference_occurrence_dict = sbom_reference_occurrence_instance.to_dict()
# create an instance of SBOMReferenceOccurrence from a dict
sbom_reference_occurrence_from_dict = SBOMReferenceOccurrence.from_dict(sbom_reference_occurrence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


