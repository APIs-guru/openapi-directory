# NormalizedSkill


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**skill_name** | **str** | Canonical skill name | [optional] 
**uuid** | **str** | Universally Unique Identifier for the canonical skill name | [optional] 

## Example

```python
from openapi_client.models.normalized_skill import NormalizedSkill

# TODO update the JSON string below
json = "{}"
# create an instance of NormalizedSkill from a JSON string
normalized_skill_instance = NormalizedSkill.from_json(json)
# print the JSON string representation of the object
print(NormalizedSkill.to_json())

# convert the object into a dict
normalized_skill_dict = normalized_skill_instance.to_dict()
# create an instance of NormalizedSkill from a dict
normalized_skill_from_dict = NormalizedSkill.from_dict(normalized_skill_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


