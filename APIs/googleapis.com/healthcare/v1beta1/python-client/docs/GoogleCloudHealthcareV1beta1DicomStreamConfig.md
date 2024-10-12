# GoogleCloudHealthcareV1beta1DicomStreamConfig

StreamConfig specifies configuration for a streaming DICOM export.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_destination** | [**GoogleCloudHealthcareV1beta1DicomBigQueryDestination**](GoogleCloudHealthcareV1beta1DicomBigQueryDestination.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_healthcare_v1beta1_dicom_stream_config import GoogleCloudHealthcareV1beta1DicomStreamConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudHealthcareV1beta1DicomStreamConfig from a JSON string
google_cloud_healthcare_v1beta1_dicom_stream_config_instance = GoogleCloudHealthcareV1beta1DicomStreamConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudHealthcareV1beta1DicomStreamConfig.to_json())

# convert the object into a dict
google_cloud_healthcare_v1beta1_dicom_stream_config_dict = google_cloud_healthcare_v1beta1_dicom_stream_config_instance.to_dict()
# create an instance of GoogleCloudHealthcareV1beta1DicomStreamConfig from a dict
google_cloud_healthcare_v1beta1_dicom_stream_config_from_dict = GoogleCloudHealthcareV1beta1DicomStreamConfig.from_dict(google_cloud_healthcare_v1beta1_dicom_stream_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


