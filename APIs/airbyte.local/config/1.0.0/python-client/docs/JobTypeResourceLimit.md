# JobTypeResourceLimit

sets resource requirements for a specific job type for an actor definition. these values override the default, if both are set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_type** | [**JobType**](JobType.md) |  | 
**resource_requirements** | [**ResourceRequirements**](ResourceRequirements.md) |  | 

## Example

```python
from openapi_client.models.job_type_resource_limit import JobTypeResourceLimit

# TODO update the JSON string below
json = "{}"
# create an instance of JobTypeResourceLimit from a JSON string
job_type_resource_limit_instance = JobTypeResourceLimit.from_json(json)
# print the JSON string representation of the object
print(JobTypeResourceLimit.to_json())

# convert the object into a dict
job_type_resource_limit_dict = job_type_resource_limit_instance.to_dict()
# create an instance of JobTypeResourceLimit from a dict
job_type_resource_limit_from_dict = JobTypeResourceLimit.from_dict(job_type_resource_limit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


