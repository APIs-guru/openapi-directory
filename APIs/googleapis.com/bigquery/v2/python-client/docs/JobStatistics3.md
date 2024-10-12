# JobStatistics3

Statistics for a load job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bad_records** | **str** | Output only. The number of bad records encountered. Note that if the job has failed because of more bad records encountered than the maximum allowed in the load job configuration, then this number can be less than the total number of bad records present in the input data. | [optional] [readonly] 
**input_file_bytes** | **str** | Output only. Number of bytes of source data in a load job. | [optional] [readonly] 
**input_files** | **str** | Output only. Number of source files in a load job. | [optional] [readonly] 
**output_bytes** | **str** | Output only. Size of the loaded data in bytes. Note that while a load job is in the running state, this value may change. | [optional] [readonly] 
**output_rows** | **str** | Output only. Number of rows imported in a load job. Note that while an import job is in the running state, this value may change. | [optional] [readonly] 
**timeline** | [**List[QueryTimelineSample]**](QueryTimelineSample.md) | Output only. Describes a timeline of job execution. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_statistics3 import JobStatistics3

# TODO update the JSON string below
json = "{}"
# create an instance of JobStatistics3 from a JSON string
job_statistics3_instance = JobStatistics3.from_json(json)
# print the JSON string representation of the object
print(JobStatistics3.to_json())

# convert the object into a dict
job_statistics3_dict = job_statistics3_instance.to_dict()
# create an instance of JobStatistics3 from a dict
job_statistics3_from_dict = JobStatistics3.from_dict(job_statistics3_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


