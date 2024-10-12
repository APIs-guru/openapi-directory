# JobHistoryFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**JobExecutionStatus**](JobExecutionStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.job_history_filter import JobHistoryFilter

# TODO update the JSON string below
json = "{}"
# create an instance of JobHistoryFilter from a JSON string
job_history_filter_instance = JobHistoryFilter.from_json(json)
# print the JSON string representation of the object
print(JobHistoryFilter.to_json())

# convert the object into a dict
job_history_filter_dict = job_history_filter_instance.to_dict()
# create an instance of JobHistoryFilter from a dict
job_history_filter_from_dict = JobHistoryFilter.from_dict(job_history_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


