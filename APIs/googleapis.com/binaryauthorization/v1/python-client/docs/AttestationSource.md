# AttestationSource

Specifies the locations for fetching the provenance attestations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_analysis_attestation_projects** | **List[str]** | The IDs of the Google Cloud projects that store the SLSA attestations as Container Analysis Occurrences, in the format &#x60;projects/[PROJECT_ID]&#x60;. Maximum number of &#x60;container_analysis_attestation_projects&#x60; allowed in each &#x60;AttestationSource&#x60; is 10. | [optional] 

## Example

```python
from openapi_client.models.attestation_source import AttestationSource

# TODO update the JSON string below
json = "{}"
# create an instance of AttestationSource from a JSON string
attestation_source_instance = AttestationSource.from_json(json)
# print the JSON string representation of the object
print(AttestationSource.to_json())

# convert the object into a dict
attestation_source_dict = attestation_source_instance.to_dict()
# create an instance of AttestationSource from a dict
attestation_source_from_dict = AttestationSource.from_dict(attestation_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


