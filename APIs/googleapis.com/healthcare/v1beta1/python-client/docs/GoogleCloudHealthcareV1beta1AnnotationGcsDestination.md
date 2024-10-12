# GoogleCloudHealthcareV1beta1AnnotationGcsDestination

The Cloud Storage location for export.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri_prefix** | **str** | The Cloud Storage destination to export to. URI for a Cloud Storage directory where the server writes result files, in the format &#x60;gs://{bucket-id}/{path/to/destination/dir}&#x60;. If there is no trailing slash, the service appends one when composing the object path. The user is responsible for creating the Cloud Storage bucket referenced in &#x60;uri_prefix&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_healthcare_v1beta1_annotation_gcs_destination import GoogleCloudHealthcareV1beta1AnnotationGcsDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudHealthcareV1beta1AnnotationGcsDestination from a JSON string
google_cloud_healthcare_v1beta1_annotation_gcs_destination_instance = GoogleCloudHealthcareV1beta1AnnotationGcsDestination.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudHealthcareV1beta1AnnotationGcsDestination.to_json())

# convert the object into a dict
google_cloud_healthcare_v1beta1_annotation_gcs_destination_dict = google_cloud_healthcare_v1beta1_annotation_gcs_destination_instance.to_dict()
# create an instance of GoogleCloudHealthcareV1beta1AnnotationGcsDestination from a dict
google_cloud_healthcare_v1beta1_annotation_gcs_destination_from_dict = GoogleCloudHealthcareV1beta1AnnotationGcsDestination.from_dict(google_cloud_healthcare_v1beta1_annotation_gcs_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


