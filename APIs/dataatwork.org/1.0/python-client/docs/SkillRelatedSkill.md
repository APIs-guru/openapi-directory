# SkillRelatedSkill


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**skill_name** | **str** | Skill name | [optional] 
**uuid** | **str** | Universally Unique Identifier for the skill | [optional] 

## Example

```python
from openapi_client.models.skill_related_skill import SkillRelatedSkill

# TODO update the JSON string below
json = "{}"
# create an instance of SkillRelatedSkill from a JSON string
skill_related_skill_instance = SkillRelatedSkill.from_json(json)
# print the JSON string representation of the object
print(SkillRelatedSkill.to_json())

# convert the object into a dict
skill_related_skill_dict = skill_related_skill_instance.to_dict()
# create an instance of SkillRelatedSkill from a dict
skill_related_skill_from_dict = SkillRelatedSkill.from_dict(skill_related_skill_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


