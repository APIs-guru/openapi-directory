# ValidateAttestationOccurrenceRequest

Request message for ValidationHelperV1.ValidateAttestationOccurrence.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attestation** | [**AttestationOccurrence**](AttestationOccurrence.md) |  | [optional] 
**occurrence_note** | **str** | Required. The resource name of the Note to which the containing Occurrence is associated. | [optional] 
**occurrence_resource_uri** | **str** | Required. The URI of the artifact (e.g. container image) that is the subject of the containing Occurrence. | [optional] 

## Example

```python
from openapi_client.models.validate_attestation_occurrence_request import ValidateAttestationOccurrenceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ValidateAttestationOccurrenceRequest from a JSON string
validate_attestation_occurrence_request_instance = ValidateAttestationOccurrenceRequest.from_json(json)
# print the JSON string representation of the object
print(ValidateAttestationOccurrenceRequest.to_json())

# convert the object into a dict
validate_attestation_occurrence_request_dict = validate_attestation_occurrence_request_instance.to_dict()
# create an instance of ValidateAttestationOccurrenceRequest from a dict
validate_attestation_occurrence_request_from_dict = ValidateAttestationOccurrenceRequest.from_dict(validate_attestation_occurrence_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


