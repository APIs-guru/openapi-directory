# ActorDefinitionResourceRequirements

actor definition specific resource requirements. if default is set, these are the requirements that should be set for ALL jobs run for this actor definition. it is overriden by the job type specific configurations. if not set, the platform will use defaults. these values will be overriden by configuration at the connection level.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default** | [**ResourceRequirements**](ResourceRequirements.md) |  | [optional] 
**job_specific** | [**List[JobTypeResourceLimit]**](JobTypeResourceLimit.md) |  | [optional] 

## Example

```python
from openapi_client.models.actor_definition_resource_requirements import ActorDefinitionResourceRequirements

# TODO update the JSON string below
json = "{}"
# create an instance of ActorDefinitionResourceRequirements from a JSON string
actor_definition_resource_requirements_instance = ActorDefinitionResourceRequirements.from_json(json)
# print the JSON string representation of the object
print(ActorDefinitionResourceRequirements.to_json())

# convert the object into a dict
actor_definition_resource_requirements_dict = actor_definition_resource_requirements_instance.to_dict()
# create an instance of ActorDefinitionResourceRequirements from a dict
actor_definition_resource_requirements_from_dict = ActorDefinitionResourceRequirements.from_dict(actor_definition_resource_requirements_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


