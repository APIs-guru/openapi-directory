# JobStateFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | [**JobState**](JobState.md) |  | [optional] 

## Example

```python
from openapi_client.models.job_state_filter import JobStateFilter

# TODO update the JSON string below
json = "{}"
# create an instance of JobStateFilter from a JSON string
job_state_filter_instance = JobStateFilter.from_json(json)
# print the JSON string representation of the object
print(JobStateFilter.to_json())

# convert the object into a dict
job_state_filter_dict = job_state_filter_instance.to_dict()
# create an instance of JobStateFilter from a dict
job_state_filter_from_dict = JobStateFilter.from_dict(job_state_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


