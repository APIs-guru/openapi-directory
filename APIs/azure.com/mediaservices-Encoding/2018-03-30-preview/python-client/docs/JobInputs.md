# JobInputs

Describes a list of inputs to a Job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inputs** | [**List[JobInput]**](JobInput.md) | List of inputs to a Job. | [optional] 

## Example

```python
from openapi_client.models.job_inputs import JobInputs

# TODO update the JSON string below
json = "{}"
# create an instance of JobInputs from a JSON string
job_inputs_instance = JobInputs.from_json(json)
# print the JSON string representation of the object
print(JobInputs.to_json())

# convert the object into a dict
job_inputs_dict = job_inputs_instance.to_dict()
# create an instance of JobInputs from a dict
job_inputs_from_dict = JobInputs.from_dict(job_inputs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


