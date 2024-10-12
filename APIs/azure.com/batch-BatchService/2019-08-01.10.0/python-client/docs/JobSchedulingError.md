# JobSchedulingError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | [**ErrorCategory**](ErrorCategory.md) |  | 
**code** | **str** |  | [optional] 
**details** | [**List[NameValuePair]**](NameValuePair.md) |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.job_scheduling_error import JobSchedulingError

# TODO update the JSON string below
json = "{}"
# create an instance of JobSchedulingError from a JSON string
job_scheduling_error_instance = JobSchedulingError.from_json(json)
# print the JSON string representation of the object
print(JobSchedulingError.to_json())

# convert the object into a dict
job_scheduling_error_dict = job_scheduling_error_instance.to_dict()
# create an instance of JobSchedulingError from a dict
job_scheduling_error_from_dict = JobSchedulingError.from_dict(job_scheduling_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


