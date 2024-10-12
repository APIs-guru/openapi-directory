# JobsSummary

Summary of the replication job data for this vault.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failed_jobs** | **int** | Count of failed jobs. | [optional] 
**in_progress_jobs** | **int** | Count of in-progress jobs. | [optional] 
**suspended_jobs** | **int** | Count of suspended jobs. | [optional] 

## Example

```python
from openapi_client.models.jobs_summary import JobsSummary

# TODO update the JSON string below
json = "{}"
# create an instance of JobsSummary from a JSON string
jobs_summary_instance = JobsSummary.from_json(json)
# print the JSON string representation of the object
print(JobsSummary.to_json())

# convert the object into a dict
jobs_summary_dict = jobs_summary_instance.to_dict()
# create an instance of JobsSummary from a dict
jobs_summary_from_dict = JobsSummary.from_dict(jobs_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


