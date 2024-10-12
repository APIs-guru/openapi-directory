# HealthProfileQuestionResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | **object** | A health profile question does not have any attribute since it only relates an answer to the corresponding question definition.  | [optional] 
**id** | **str** |  | 
**links** | [**HealthProfileQuestionResourceLinks**](HealthProfileQuestionResourceLinks.md) |  | [optional] 
**relationships** | [**HealthProfileQuestionResourceRelationships**](HealthProfileQuestionResourceRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.health_profile_question_resource import HealthProfileQuestionResource

# TODO update the JSON string below
json = "{}"
# create an instance of HealthProfileQuestionResource from a JSON string
health_profile_question_resource_instance = HealthProfileQuestionResource.from_json(json)
# print the JSON string representation of the object
print(HealthProfileQuestionResource.to_json())

# convert the object into a dict
health_profile_question_resource_dict = health_profile_question_resource_instance.to_dict()
# create an instance of HealthProfileQuestionResource from a dict
health_profile_question_resource_from_dict = HealthProfileQuestionResource.from_dict(health_profile_question_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


