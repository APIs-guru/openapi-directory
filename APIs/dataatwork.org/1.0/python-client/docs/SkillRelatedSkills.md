# SkillRelatedSkills


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**related_skill_name** | [**List[SkillRelatedSkill]**](SkillRelatedSkill.md) |  | [optional] 
**uuid** | **str** | Universally Unique Identifier for the skills | [optional] 

## Example

```python
from openapi_client.models.skill_related_skills import SkillRelatedSkills

# TODO update the JSON string below
json = "{}"
# create an instance of SkillRelatedSkills from a JSON string
skill_related_skills_instance = SkillRelatedSkills.from_json(json)
# print the JSON string representation of the object
print(SkillRelatedSkills.to_json())

# convert the object into a dict
skill_related_skills_dict = skill_related_skills_instance.to_dict()
# create an instance of SkillRelatedSkills from a dict
skill_related_skills_from_dict = SkillRelatedSkills.from_dict(skill_related_skills_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


