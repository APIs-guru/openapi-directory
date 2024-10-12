# FhirOutput

Details about the FHIR store to write the output to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fhir_store** | **str** | Name of the output FHIR store, which must already exist. You must grant the healthcare.fhirResources.update permission on the destination store to your project&#39;s **Cloud Healthcare Service Agent** [service account](https://cloud.google.com/healthcare/docs/how-tos/permissions-healthcare-api-gcp-products#the_cloud_healthcare_service_agent). The destination store must set enableUpdateCreate to true. The destination store must use FHIR version R4. Writing these resources will consume FHIR operations quota from the project containing the source data. De-identify operation metadata is only generated for DICOM de-identification operations. | [optional] 

## Example

```python
from openapi_client.models.fhir_output import FhirOutput

# TODO update the JSON string below
json = "{}"
# create an instance of FhirOutput from a JSON string
fhir_output_instance = FhirOutput.from_json(json)
# print the JSON string representation of the object
print(FhirOutput.to_json())

# convert the object into a dict
fhir_output_dict = fhir_output_instance.to_dict()
# create an instance of FhirOutput from a dict
fhir_output_from_dict = FhirOutput.from_dict(fhir_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


