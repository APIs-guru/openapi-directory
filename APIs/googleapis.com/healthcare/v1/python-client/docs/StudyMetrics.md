# StudyMetrics

StudyMetrics contains metrics describing a DICOM study.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_storage_size_bytes** | **str** | Total blob storage bytes for all instances in the study. | [optional] 
**instance_count** | **str** | Number of instances in the study. | [optional] 
**series_count** | **str** | Number of series in the study. | [optional] 
**structured_storage_size_bytes** | **str** | Total structured storage bytes for all instances in the study. | [optional] 
**study** | **str** | The study resource path. For example, &#x60;projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}/dicomWeb/studies/{study_uid}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.study_metrics import StudyMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of StudyMetrics from a JSON string
study_metrics_instance = StudyMetrics.from_json(json)
# print the JSON string representation of the object
print(StudyMetrics.to_json())

# convert the object into a dict
study_metrics_dict = study_metrics_instance.to_dict()
# create an instance of StudyMetrics from a dict
study_metrics_from_dict = StudyMetrics.from_dict(study_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


