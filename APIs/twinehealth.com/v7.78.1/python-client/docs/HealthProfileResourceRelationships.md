# HealthProfileResourceRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**patient** | [**HealthProfileResourceRelationshipsPatient**](HealthProfileResourceRelationshipsPatient.md) |  | [optional] 
**questions** | [**HealthProfileResourceRelationshipsQuestions**](HealthProfileResourceRelationshipsQuestions.md) |  | [optional] 

## Example

```python
from openapi_client.models.health_profile_resource_relationships import HealthProfileResourceRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of HealthProfileResourceRelationships from a JSON string
health_profile_resource_relationships_instance = HealthProfileResourceRelationships.from_json(json)
# print the JSON string representation of the object
print(HealthProfileResourceRelationships.to_json())

# convert the object into a dict
health_profile_resource_relationships_dict = health_profile_resource_relationships_instance.to_dict()
# create an instance of HealthProfileResourceRelationships from a dict
health_profile_resource_relationships_from_dict = HealthProfileResourceRelationships.from_dict(health_profile_resource_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


