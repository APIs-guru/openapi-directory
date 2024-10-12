# HealthProfileAnswerResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**HealthProfileAnswerResourceAttributes**](HealthProfileAnswerResourceAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**HealthProfileAnswerResourceLinks**](HealthProfileAnswerResourceLinks.md) |  | [optional] 
**relationships** | [**HealthProfileAnswerResourceRelationships**](HealthProfileAnswerResourceRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.health_profile_answer_resource import HealthProfileAnswerResource

# TODO update the JSON string below
json = "{}"
# create an instance of HealthProfileAnswerResource from a JSON string
health_profile_answer_resource_instance = HealthProfileAnswerResource.from_json(json)
# print the JSON string representation of the object
print(HealthProfileAnswerResource.to_json())

# convert the object into a dict
health_profile_answer_resource_dict = health_profile_answer_resource_instance.to_dict()
# create an instance of HealthProfileAnswerResource from a dict
health_profile_answer_resource_from_dict = HealthProfileAnswerResource.from_dict(health_profile_answer_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


