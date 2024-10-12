# JobStatistics4

Statistics for an extract job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_uri_file_counts** | **List[str]** | Output only. Number of files per destination URI or URI pattern specified in the extract configuration. These values will be in the same order as the URIs specified in the &#39;destinationUris&#39; field. | [optional] [readonly] 
**input_bytes** | **str** | Output only. Number of user bytes extracted into the result. This is the byte count as computed by BigQuery for billing purposes and doesn&#39;t have any relationship with the number of actual result bytes extracted in the desired format. | [optional] [readonly] 
**timeline** | [**List[QueryTimelineSample]**](QueryTimelineSample.md) | Output only. Describes a timeline of job execution. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_statistics4 import JobStatistics4

# TODO update the JSON string below
json = "{}"
# create an instance of JobStatistics4 from a JSON string
job_statistics4_instance = JobStatistics4.from_json(json)
# print the JSON string representation of the object
print(JobStatistics4.to_json())

# convert the object into a dict
job_statistics4_dict = job_statistics4_instance.to_dict()
# create an instance of JobStatistics4 from a dict
job_statistics4_from_dict = JobStatistics4.from_dict(job_statistics4_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


