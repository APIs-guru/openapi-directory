# GoogleCloudHealthcareV1DicomGcsSource

Specifies the configuration for importing data from Cloud Storage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **str** | Points to a Cloud Storage URI containing file(s) with content only. The URI must be in the following format: &#x60;gs://{bucket_id}/{object_id}&#x60;. The URI can include wildcards in &#x60;object_id&#x60; and thus identify multiple files. Supported wildcards: * &#39;*&#39; to match 0 or more non-separator characters * &#39;**&#39; to match 0 or more characters (including separators). Must be used at the end of a path and with no other wildcards in the path. Can also be used with a file extension (such as .dcm), which imports all files with the extension in the specified directory and its sub-directories. For example, &#x60;gs://my-bucket/my-directory/**.dcm&#x60; imports all files with .dcm extensions in &#x60;my-directory/&#x60; and its sub-directories. * &#39;?&#39; to match 1 character. All other URI formats are invalid. Files matching the wildcard are expected to contain content only, no metadata. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_healthcare_v1_dicom_gcs_source import GoogleCloudHealthcareV1DicomGcsSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudHealthcareV1DicomGcsSource from a JSON string
google_cloud_healthcare_v1_dicom_gcs_source_instance = GoogleCloudHealthcareV1DicomGcsSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudHealthcareV1DicomGcsSource.to_json())

# convert the object into a dict
google_cloud_healthcare_v1_dicom_gcs_source_dict = google_cloud_healthcare_v1_dicom_gcs_source_instance.to_dict()
# create an instance of GoogleCloudHealthcareV1DicomGcsSource from a dict
google_cloud_healthcare_v1_dicom_gcs_source_from_dict = GoogleCloudHealthcareV1DicomGcsSource.from_dict(google_cloud_healthcare_v1_dicom_gcs_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


