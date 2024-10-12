# JobSkills


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_title** | **str** | Title of the job associated with the UUID | [optional] 
**job_uuid** | **str** | Universally Unique Identifier for the job | [optional] 
**normalized_job_title** | **str** | Normalized title of the job associated with the UUID | [optional] 
**skills** | [**List[SkillJob]**](SkillJob.md) |  | [optional] 

## Example

```python
from openapi_client.models.job_skills import JobSkills

# TODO update the JSON string below
json = "{}"
# create an instance of JobSkills from a JSON string
job_skills_instance = JobSkills.from_json(json)
# print the JSON string representation of the object
print(JobSkills.to_json())

# convert the object into a dict
job_skills_dict = job_skills_instance.to_dict()
# create an instance of JobSkills from a dict
job_skills_from_dict = JobSkills.from_dict(job_skills_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


