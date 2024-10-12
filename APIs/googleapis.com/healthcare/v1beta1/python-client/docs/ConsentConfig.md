# ConsentConfig

Configures whether to enforce consent for the FHIR store and which consent enforcement version is being used.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_determination_log_config** | [**AccessDeterminationLogConfig**](AccessDeterminationLogConfig.md) |  | [optional] 
**access_enforced** | **bool** | Optional. If set to true, when accessing FHIR resources, the consent headers will be verified against consents given by patients. See the ConsentEnforcementVersion for the supported consent headers. | [optional] 
**consent_header_handling** | [**ConsentHeaderHandling**](ConsentHeaderHandling.md) |  | [optional] 
**enforced_admin_consents** | **List[str]** | The versioned names of the enforced admin Consent resource(s), in the format &#x60;projects/{project_id}/locations/{location}/datasets/{dataset_id}/fhirStores/{fhir_store_id}/fhir/Consent/{resource_id}/_history/{version_id}&#x60;. For FHIR stores with &#x60;disable_resource_versioning&#x3D;true&#x60;, the format is &#x60;projects/{project_id}/locations/{location}/datasets/{dataset_id}/fhirStores/{fhir_store_id}/fhir/Consent/{resource_id}&#x60;. This field can only be updated using ApplyAdminConsents. | [optional] 
**version** | **str** | Required. Specifies which consent enforcement version is being used for this FHIR store. This field can only be set once by either CreateFhirStore or UpdateFhirStore. After that, you must call ApplyConsents to change the version. | [optional] 

## Example

```python
from openapi_client.models.consent_config import ConsentConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ConsentConfig from a JSON string
consent_config_instance = ConsentConfig.from_json(json)
# print the JSON string representation of the object
print(ConsentConfig.to_json())

# convert the object into a dict
consent_config_dict = consent_config_instance.to_dict()
# create an instance of ConsentConfig from a dict
consent_config_from_dict = ConsentConfig.from_dict(consent_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


