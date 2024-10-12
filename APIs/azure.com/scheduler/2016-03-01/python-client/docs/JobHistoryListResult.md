# JobHistoryListResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the URL to get the next set of job histories. | [optional] 
**value** | [**List[JobHistoryDefinition]**](JobHistoryDefinition.md) | Gets or sets the job histories under job. | [optional] 

## Example

```python
from openapi_client.models.job_history_list_result import JobHistoryListResult

# TODO update the JSON string below
json = "{}"
# create an instance of JobHistoryListResult from a JSON string
job_history_list_result_instance = JobHistoryListResult.from_json(json)
# print the JSON string representation of the object
print(JobHistoryListResult.to_json())

# convert the object into a dict
job_history_list_result_dict = job_history_list_result_instance.to_dict()
# create an instance of JobHistoryListResult from a dict
job_history_list_result_from_dict = JobHistoryListResult.from_dict(job_history_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


