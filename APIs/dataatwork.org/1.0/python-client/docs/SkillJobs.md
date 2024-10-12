# SkillJobs


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobs** | [**List[JobSkill]**](JobSkill.md) |  | [optional] 
**normalized_job_title** | **str** | Normalized title of the job associated with the UUID | [optional] 
**skill_name** | **str** | Title of the job associated with the UUID | [optional] 
**skill_uuid** | **str** | Universally Unique Identifier for the job | [optional] 

## Example

```python
from openapi_client.models.skill_jobs import SkillJobs

# TODO update the JSON string below
json = "{}"
# create an instance of SkillJobs from a JSON string
skill_jobs_instance = SkillJobs.from_json(json)
# print the JSON string representation of the object
print(SkillJobs.to_json())

# convert the object into a dict
skill_jobs_dict = skill_jobs_instance.to_dict()
# create an instance of SkillJobs from a dict
skill_jobs_from_dict = SkillJobs.from_dict(skill_jobs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


