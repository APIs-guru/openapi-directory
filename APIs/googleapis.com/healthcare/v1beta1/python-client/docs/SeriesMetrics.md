# SeriesMetrics

SeriesMetrics contains metrics describing a DICOM series.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_storage_size_bytes** | **str** | Total blob storage bytes for all instances in the series. | [optional] 
**instance_count** | **str** | Number of instances in the series. | [optional] 
**series** | **str** | The series resource path. For example, &#x60;projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}/dicomWeb/studies/{study_uid}/series/{series_uid}&#x60;. | [optional] 
**structured_storage_size_bytes** | **str** | Total structured storage bytes for all instances in the series. | [optional] 

## Example

```python
from openapi_client.models.series_metrics import SeriesMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of SeriesMetrics from a JSON string
series_metrics_instance = SeriesMetrics.from_json(json)
# print the JSON string representation of the object
print(SeriesMetrics.to_json())

# convert the object into a dict
series_metrics_dict = series_metrics_instance.to_dict()
# create an instance of SeriesMetrics from a dict
series_metrics_from_dict = SeriesMetrics.from_dict(series_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


