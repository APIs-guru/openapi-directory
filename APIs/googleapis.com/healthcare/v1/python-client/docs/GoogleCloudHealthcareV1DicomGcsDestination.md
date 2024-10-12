# GoogleCloudHealthcareV1DicomGcsDestination

The Cloud Storage location where the server writes the output and the export configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mime_type** | **str** | MIME types supported by DICOM spec. Each file is written in the following format: &#x60;.../{study_id}/{series_id}/{instance_id}[/{frame_number}].{extension}&#x60; The frame_number component exists only for multi-frame instances. Supported MIME types are consistent with supported formats in DICOMweb: https://cloud.google.com/healthcare/docs/dicom#retrieve_transaction. Specifically, the following are supported: - application/dicom; transfer-syntax&#x3D;1.2.840.10008.1.2.1 (uncompressed DICOM) - application/dicom; transfer-syntax&#x3D;1.2.840.10008.1.2.4.50 (DICOM with embedded JPEG Baseline) - application/dicom; transfer-syntax&#x3D;1.2.840.10008.1.2.4.90 (DICOM with embedded JPEG 2000 Lossless Only) - application/dicom; transfer-syntax&#x3D;1.2.840.10008.1.2.4.91 (DICOM with embedded JPEG 2000) - application/dicom; transfer-syntax&#x3D;* (DICOM with no transcoding) - application/octet-stream; transfer-syntax&#x3D;1.2.840.10008.1.2.1 (raw uncompressed PixelData) - application/octet-stream; transfer-syntax&#x3D;* (raw PixelData in whatever format it was uploaded in) - image/jpeg; transfer-syntax&#x3D;1.2.840.10008.1.2.4.50 (Consumer JPEG) - image/png The following extensions are used for output files: - application/dicom -&gt; .dcm - image/jpeg -&gt; .jpg - image/png -&gt; .png - application/octet-stream -&gt; no extension If unspecified, the instances are exported in the original DICOM format they were uploaded in. | [optional] 
**uri_prefix** | **str** | The Cloud Storage destination to export to. URI for a Cloud Storage directory where the server writes the result files, in the format &#x60;gs://{bucket-id}/{path/to/destination/dir}&#x60;). If there is no trailing slash, the service appends one when composing the object path. The user is responsible for creating the Cloud Storage bucket referenced in &#x60;uri_prefix&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_healthcare_v1_dicom_gcs_destination import GoogleCloudHealthcareV1DicomGcsDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudHealthcareV1DicomGcsDestination from a JSON string
google_cloud_healthcare_v1_dicom_gcs_destination_instance = GoogleCloudHealthcareV1DicomGcsDestination.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudHealthcareV1DicomGcsDestination.to_json())

# convert the object into a dict
google_cloud_healthcare_v1_dicom_gcs_destination_dict = google_cloud_healthcare_v1_dicom_gcs_destination_instance.to_dict()
# create an instance of GoogleCloudHealthcareV1DicomGcsDestination from a dict
google_cloud_healthcare_v1_dicom_gcs_destination_from_dict = GoogleCloudHealthcareV1DicomGcsDestination.from_dict(google_cloud_healthcare_v1_dicom_gcs_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


