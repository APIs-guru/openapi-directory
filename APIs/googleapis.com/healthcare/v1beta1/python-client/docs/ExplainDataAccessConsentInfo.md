# ExplainDataAccessConsentInfo

The enforcing consent's metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cascade_origins** | **List[str]** | The compartment base resources that matched a cascading policy. Each resource has the following format: &#x60;projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}/fhir/{resource_type}/{resource_id}&#x60; | [optional] 
**consent_resource** | **str** | The resource name of this consent resource. Format: &#x60;projects/{projectId}/datasets/{datasetId}/fhirStores/{fhirStoreId}/fhir/{resourceType}/{id}&#x60;. | [optional] 
**enforcement_time** | **str** | Last enforcement timestamp of this consent resource. | [optional] 
**matching_accessor_scopes** | [**List[ConsentAccessorScope]**](ConsentAccessorScope.md) | A list of all the matching accessor scopes of this consent policy that enforced ExplainDataAccessConsentScope.accessor_scope. | [optional] 
**patient_consent_owner** | **str** | The patient owning the consent (only applicable for patient consents), in the format: &#x60;projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}/fhir/Patient/{patient_id}&#x60; | [optional] 
**type** | **str** | The policy type of consent resource (e.g. PATIENT, ADMIN). | [optional] 
**variants** | **List[str]** | The consent&#39;s variant combinations. A single consent may have multiple variants. | [optional] 

## Example

```python
from openapi_client.models.explain_data_access_consent_info import ExplainDataAccessConsentInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ExplainDataAccessConsentInfo from a JSON string
explain_data_access_consent_info_instance = ExplainDataAccessConsentInfo.from_json(json)
# print the JSON string representation of the object
print(ExplainDataAccessConsentInfo.to_json())

# convert the object into a dict
explain_data_access_consent_info_dict = explain_data_access_consent_info_instance.to_dict()
# create an instance of ExplainDataAccessConsentInfo from a dict
explain_data_access_consent_info_from_dict = ExplainDataAccessConsentInfo.from_dict(explain_data_access_consent_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


