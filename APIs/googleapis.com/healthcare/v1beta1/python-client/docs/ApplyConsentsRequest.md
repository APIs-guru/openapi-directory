# ApplyConsentsRequest

Request to apply the Consent resources for the specified FHIR store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**patient_scope** | [**PatientScope**](PatientScope.md) |  | [optional] 
**time_range** | [**TimeRange**](TimeRange.md) |  | [optional] 
**validate_only** | **bool** | Optional. If true, the method only validates Consent resources to make sure they are supported. When the operation completes, ApplyConsentsResponse is returned where &#x60;consent_apply_success&#x60; and &#x60;consent_apply_failure&#x60; indicate supported and unsupported (or invalid) Consent resources, respectively. Otherwise, the method propagates the aggregate consensual information to the patient&#39;s resources. Upon success, &#x60;affected_resources&#x60; in the ApplyConsentsResponse indicates the number of resources that may have consensual access changed. | [optional] 

## Example

```python
from openapi_client.models.apply_consents_request import ApplyConsentsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApplyConsentsRequest from a JSON string
apply_consents_request_instance = ApplyConsentsRequest.from_json(json)
# print the JSON string representation of the object
print(ApplyConsentsRequest.to_json())

# convert the object into a dict
apply_consents_request_dict = apply_consents_request_instance.to_dict()
# create an instance of ApplyConsentsRequest from a dict
apply_consents_request_from_dict = ApplyConsentsRequest.from_dict(apply_consents_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


