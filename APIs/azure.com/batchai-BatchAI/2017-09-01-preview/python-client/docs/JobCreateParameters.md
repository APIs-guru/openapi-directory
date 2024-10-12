# JobCreateParameters

Parameters supplied to the Create operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The region in which to create the job. | 
**properties** | [**JobBaseProperties**](JobBaseProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | The user specified tags associated with the job. | [optional] 

## Example

```python
from openapi_client.models.job_create_parameters import JobCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of JobCreateParameters from a JSON string
job_create_parameters_instance = JobCreateParameters.from_json(json)
# print the JSON string representation of the object
print(JobCreateParameters.to_json())

# convert the object into a dict
job_create_parameters_dict = job_create_parameters_instance.to_dict()
# create an instance of JobCreateParameters from a dict
job_create_parameters_from_dict = JobCreateParameters.from_dict(job_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


