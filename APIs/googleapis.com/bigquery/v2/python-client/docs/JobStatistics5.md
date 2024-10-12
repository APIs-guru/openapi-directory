# JobStatistics5

Statistics for a copy job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**copied_logical_bytes** | **str** | Output only. Number of logical bytes copied to the destination table. | [optional] [readonly] 
**copied_rows** | **str** | Output only. Number of rows copied to the destination table. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_statistics5 import JobStatistics5

# TODO update the JSON string below
json = "{}"
# create an instance of JobStatistics5 from a JSON string
job_statistics5_instance = JobStatistics5.from_json(json)
# print the JSON string representation of the object
print(JobStatistics5.to_json())

# convert the object into a dict
job_statistics5_dict = job_statistics5_instance.to_dict()
# create an instance of JobStatistics5 from a dict
job_statistics5_from_dict = JobStatistics5.from_dict(job_statistics5_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


