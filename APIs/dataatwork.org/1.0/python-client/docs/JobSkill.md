# JobSkill


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**importance** | **float** | O*NET importance score indicating how important skill is to job. | [optional] 
**job_title** | **str** | Job title | [optional] 
**job_uuid** | **str** | Universally Unique Identifier for the job | [optional] 
**level** | **float** | O*NET level score indicating the skill level required for the job. | [optional] 
**normalized_job_title** | **str** | Normalized job title | [optional] 

## Example

```python
from openapi_client.models.job_skill import JobSkill

# TODO update the JSON string below
json = "{}"
# create an instance of JobSkill from a JSON string
job_skill_instance = JobSkill.from_json(json)
# print the JSON string representation of the object
print(JobSkill.to_json())

# convert the object into a dict
job_skill_dict = job_skill_instance.to_dict()
# create an instance of JobSkill from a dict
job_skill_from_dict = JobSkill.from_dict(job_skill_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


