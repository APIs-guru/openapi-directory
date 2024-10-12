# ContinuousWebJob

Continuous Web Job Information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | ContinuousWebJob resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.continuous_web_job import ContinuousWebJob

# TODO update the JSON string below
json = "{}"
# create an instance of ContinuousWebJob from a JSON string
continuous_web_job_instance = ContinuousWebJob.from_json(json)
# print the JSON string representation of the object
print(ContinuousWebJob.to_json())

# convert the object into a dict
continuous_web_job_dict = continuous_web_job_instance.to_dict()
# create an instance of ContinuousWebJob from a dict
continuous_web_job_from_dict = ContinuousWebJob.from_dict(continuous_web_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


