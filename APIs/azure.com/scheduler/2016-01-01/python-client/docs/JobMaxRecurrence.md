# JobMaxRecurrence


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**frequency** | **str** | Gets or sets the frequency of recurrence (second, minute, hour, day, week, month). | [optional] 
**interval** | **int** | Gets or sets the interval between retries. | [optional] 

## Example

```python
from openapi_client.models.job_max_recurrence import JobMaxRecurrence

# TODO update the JSON string below
json = "{}"
# create an instance of JobMaxRecurrence from a JSON string
job_max_recurrence_instance = JobMaxRecurrence.from_json(json)
# print the JSON string representation of the object
print(JobMaxRecurrence.to_json())

# convert the object into a dict
job_max_recurrence_dict = job_max_recurrence_instance.to_dict()
# create an instance of JobMaxRecurrence from a dict
job_max_recurrence_from_dict = JobMaxRecurrence.from_dict(job_max_recurrence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


