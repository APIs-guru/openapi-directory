# HealthProfileAnswerResourceRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**patient** | [**HealthProfileAnswerResourceRelationshipsPatient**](HealthProfileAnswerResourceRelationshipsPatient.md) |  | [optional] 

## Example

```python
from openapi_client.models.health_profile_answer_resource_relationships import HealthProfileAnswerResourceRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of HealthProfileAnswerResourceRelationships from a JSON string
health_profile_answer_resource_relationships_instance = HealthProfileAnswerResourceRelationships.from_json(json)
# print the JSON string representation of the object
print(HealthProfileAnswerResourceRelationships.to_json())

# convert the object into a dict
health_profile_answer_resource_relationships_dict = health_profile_answer_resource_relationships_instance.to_dict()
# create an instance of HealthProfileAnswerResourceRelationships from a dict
health_profile_answer_resource_relationships_from_dict = HealthProfileAnswerResourceRelationships.from_dict(health_profile_answer_resource_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


