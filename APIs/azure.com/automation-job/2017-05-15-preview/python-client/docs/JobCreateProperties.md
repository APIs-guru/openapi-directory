# JobCreateProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | **Dict[str, str]** | Gets or sets the parameters of the job. | [optional] 
**run_on** | **str** | Gets or sets the runOn which specifies the group name where the job is to be executed. | [optional] 
**runbook** | [**RunbookAssociationProperty**](RunbookAssociationProperty.md) |  | [optional] 

## Example

```python
from openapi_client.models.job_create_properties import JobCreateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of JobCreateProperties from a JSON string
job_create_properties_instance = JobCreateProperties.from_json(json)
# print the JSON string representation of the object
print(JobCreateProperties.to_json())

# convert the object into a dict
job_create_properties_dict = job_create_properties_instance.to_dict()
# create an instance of JobCreateProperties from a dict
job_create_properties_from_dict = JobCreateProperties.from_dict(job_create_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


