# JobSpec

JobSpec describes how the job will look.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**template** | [**ExecutionTemplateSpec**](ExecutionTemplateSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.job_spec import JobSpec

# TODO update the JSON string below
json = "{}"
# create an instance of JobSpec from a JSON string
job_spec_instance = JobSpec.from_json(json)
# print the JSON string representation of the object
print(JobSpec.to_json())

# convert the object into a dict
job_spec_dict = job_spec_instance.to_dict()
# create an instance of JobSpec from a dict
job_spec_from_dict = JobSpec.from_dict(job_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


