# SkillJob


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the skill | [optional] 
**importance** | **float** | O*NET importance score | [optional] 
**level** | **float** | O*NET level score | [optional] 
**normalized_skill_name** | **str** | Normalized skill name | [optional] 
**skill_name** | **str** | Name of the skill | [optional] 
**skill_uuid** | **str** | Universally Unique Identifier for the skill | [optional] 

## Example

```python
from openapi_client.models.skill_job import SkillJob

# TODO update the JSON string below
json = "{}"
# create an instance of SkillJob from a JSON string
skill_job_instance = SkillJob.from_json(json)
# print the JSON string representation of the object
print(SkillJob.to_json())

# convert the object into a dict
skill_job_dict = skill_job_instance.to_dict()
# create an instance of SkillJob from a dict
skill_job_from_dict = SkillJob.from_dict(skill_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


