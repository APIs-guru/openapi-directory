# ImportDicomDataRequest

Imports data into the specified DICOM store. Returns an error if any of the files to import are not DICOM files. This API accepts duplicate DICOM instances by ignoring the newly-pushed instance. It does not overwrite.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_source** | [**GoogleCloudHealthcareV1DicomGcsSource**](GoogleCloudHealthcareV1DicomGcsSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.import_dicom_data_request import ImportDicomDataRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ImportDicomDataRequest from a JSON string
import_dicom_data_request_instance = ImportDicomDataRequest.from_json(json)
# print the JSON string representation of the object
print(ImportDicomDataRequest.to_json())

# convert the object into a dict
import_dicom_data_request_dict = import_dicom_data_request_instance.to_dict()
# create an instance of ImportDicomDataRequest from a dict
import_dicom_data_request_from_dict = ImportDicomDataRequest.from_dict(import_dicom_data_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


