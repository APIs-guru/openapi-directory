# ExportDicomDataRequest

Exports data from the specified DICOM store. If a given resource, such as a DICOM object with the same SOPInstance UID, already exists in the output, it is overwritten with the version in the source dataset. Exported DICOM data persists when the DICOM store from which it was exported is deleted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_destination** | [**GoogleCloudHealthcareV1beta1DicomBigQueryDestination**](GoogleCloudHealthcareV1beta1DicomBigQueryDestination.md) |  | [optional] 
**filter_config** | [**DicomFilterConfig**](DicomFilterConfig.md) |  | [optional] 
**gcs_destination** | [**GoogleCloudHealthcareV1beta1DicomGcsDestination**](GoogleCloudHealthcareV1beta1DicomGcsDestination.md) |  | [optional] 

## Example

```python
from openapi_client.models.export_dicom_data_request import ExportDicomDataRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExportDicomDataRequest from a JSON string
export_dicom_data_request_instance = ExportDicomDataRequest.from_json(json)
# print the JSON string representation of the object
print(ExportDicomDataRequest.to_json())

# convert the object into a dict
export_dicom_data_request_dict = export_dicom_data_request_instance.to_dict()
# create an instance of ExportDicomDataRequest from a dict
export_dicom_data_request_from_dict = ExportDicomDataRequest.from_dict(export_dicom_data_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


