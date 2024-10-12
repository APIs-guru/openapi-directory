# DicomStoreMetrics

DicomStoreMetrics contains metrics describing a DICOM store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_storage_size_bytes** | **str** | Total blob storage bytes for all instances in the store. | [optional] 
**instance_count** | **str** | Number of instances in the store. | [optional] 
**name** | **str** | Resource name of the DICOM store, of the form &#x60;projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}&#x60;. | [optional] 
**series_count** | **str** | Number of series in the store. | [optional] 
**structured_storage_size_bytes** | **str** | Total structured storage bytes for all instances in the store. | [optional] 
**study_count** | **str** | Number of studies in the store. | [optional] 

## Example

```python
from openapi_client.models.dicom_store_metrics import DicomStoreMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of DicomStoreMetrics from a JSON string
dicom_store_metrics_instance = DicomStoreMetrics.from_json(json)
# print the JSON string representation of the object
print(DicomStoreMetrics.to_json())

# convert the object into a dict
dicom_store_metrics_dict = dicom_store_metrics_instance.to_dict()
# create an instance of DicomStoreMetrics from a dict
dicom_store_metrics_from_dict = DicomStoreMetrics.from_dict(dicom_store_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


