# ValidateAttestationOccurrenceResponse

Response message for ValidationHelperV1.ValidateAttestationOccurrence.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**denial_reason** | **str** | The reason for denial if the Attestation couldn&#39;t be validated. | [optional] 
**result** | **str** | The result of the Attestation validation. | [optional] 

## Example

```python
from openapi_client.models.validate_attestation_occurrence_response import ValidateAttestationOccurrenceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ValidateAttestationOccurrenceResponse from a JSON string
validate_attestation_occurrence_response_instance = ValidateAttestationOccurrenceResponse.from_json(json)
# print the JSON string representation of the object
print(ValidateAttestationOccurrenceResponse.to_json())

# convert the object into a dict
validate_attestation_occurrence_response_dict = validate_attestation_occurrence_response_instance.to_dict()
# create an instance of ValidateAttestationOccurrenceResponse from a dict
validate_attestation_occurrence_response_from_dict = ValidateAttestationOccurrenceResponse.from_dict(validate_attestation_occurrence_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


