# GoogleCloudHealthcareV1FhirGcsDestination

The configuration for exporting to Cloud Storage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri_prefix** | **str** | URI for a Cloud Storage directory where result files should be written, in the format of &#x60;gs://{bucket-id}/{path/to/destination/dir}&#x60;. If there is no trailing slash, the service appends one when composing the object path. The user is responsible for creating the Cloud Storage bucket referenced in &#x60;uri_prefix&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_healthcare_v1_fhir_gcs_destination import GoogleCloudHealthcareV1FhirGcsDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudHealthcareV1FhirGcsDestination from a JSON string
google_cloud_healthcare_v1_fhir_gcs_destination_instance = GoogleCloudHealthcareV1FhirGcsDestination.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudHealthcareV1FhirGcsDestination.to_json())

# convert the object into a dict
google_cloud_healthcare_v1_fhir_gcs_destination_dict = google_cloud_healthcare_v1_fhir_gcs_destination_instance.to_dict()
# create an instance of GoogleCloudHealthcareV1FhirGcsDestination from a dict
google_cloud_healthcare_v1_fhir_gcs_destination_from_dict = GoogleCloudHealthcareV1FhirGcsDestination.from_dict(google_cloud_healthcare_v1_fhir_gcs_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


