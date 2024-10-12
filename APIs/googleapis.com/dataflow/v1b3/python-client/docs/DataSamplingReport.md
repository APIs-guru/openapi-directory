# DataSamplingReport

Contains per-worker telemetry about the data sampling feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bytes_written_delta** | **str** | Optional. Delta of bytes written to file from previous report. | [optional] 
**elements_sampled_bytes** | **str** | Optional. Delta of bytes sampled from previous report. | [optional] 
**elements_sampled_count** | **str** | Optional. Delta of number of elements sampled from previous report. | [optional] 
**exceptions_sampled_count** | **str** | Optional. Delta of number of samples taken from user code exceptions from previous report. | [optional] 
**pcollections_sampled_count** | **str** | Optional. Delta of number of PCollections sampled from previous report. | [optional] 
**persistence_errors_count** | **str** | Optional. Delta of errors counts from persisting the samples from previous report. | [optional] 
**translation_errors_count** | **str** | Optional. Delta of errors counts from retrieving, or translating the samples from previous report. | [optional] 

## Example

```python
from openapi_client.models.data_sampling_report import DataSamplingReport

# TODO update the JSON string below
json = "{}"
# create an instance of DataSamplingReport from a JSON string
data_sampling_report_instance = DataSamplingReport.from_json(json)
# print the JSON string representation of the object
print(DataSamplingReport.to_json())

# convert the object into a dict
data_sampling_report_dict = data_sampling_report_instance.to_dict()
# create an instance of DataSamplingReport from a dict
data_sampling_report_from_dict = DataSamplingReport.from_dict(data_sampling_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


