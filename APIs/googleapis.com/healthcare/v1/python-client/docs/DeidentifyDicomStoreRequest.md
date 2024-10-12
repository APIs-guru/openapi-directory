# DeidentifyDicomStoreRequest

Creates a new DICOM store with sensitive information de-identified.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**DeidentifyConfig**](DeidentifyConfig.md) |  | [optional] 
**destination_store** | **str** | Required. The name of the DICOM store to create and write the redacted data to. For example, &#x60;projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}&#x60;. * The destination dataset must exist. * The source dataset and destination dataset must both reside in the same location. De-identifying data across multiple locations is not supported. * The destination DICOM store must not exist. * The caller must have the necessary permissions to create the destination DICOM store. | [optional] 
**filter_config** | [**DicomFilterConfig**](DicomFilterConfig.md) |  | [optional] 
**gcs_config_uri** | **str** | Cloud Storage location to read the JSON cloud.healthcare.deidentify.DeidentifyConfig from, overriding the default config. Must be of the form &#x60;gs://{bucket_id}/path/to/object&#x60;. The Cloud Storage location must grant the Cloud IAM role &#x60;roles/storage.objectViewer&#x60; to the project&#39;s Cloud Healthcare Service Agent service account. Only one of &#x60;config&#x60; and &#x60;gcs_config_uri&#x60; can be specified. | [optional] 

## Example

```python
from openapi_client.models.deidentify_dicom_store_request import DeidentifyDicomStoreRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeidentifyDicomStoreRequest from a JSON string
deidentify_dicom_store_request_instance = DeidentifyDicomStoreRequest.from_json(json)
# print the JSON string representation of the object
print(DeidentifyDicomStoreRequest.to_json())

# convert the object into a dict
deidentify_dicom_store_request_dict = deidentify_dicom_store_request_instance.to_dict()
# create an instance of DeidentifyDicomStoreRequest from a dict
deidentify_dicom_store_request_from_dict = DeidentifyDicomStoreRequest.from_dict(deidentify_dicom_store_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


