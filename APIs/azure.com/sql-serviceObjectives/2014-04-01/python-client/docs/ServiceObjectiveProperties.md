# ServiceObjectiveProperties

Represents the properties of a database service objective.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description for the service level objective. | [optional] [readonly] 
**enabled** | **bool** | Gets whether the service level objective is enabled. | [optional] [readonly] 
**is_default** | **bool** | Gets whether the service level objective is the default service objective. | [optional] [readonly] 
**is_system** | **bool** | Gets whether the service level objective is a system service objective. | [optional] [readonly] 
**service_objective_name** | **str** | The name for the service objective. | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_objective_properties import ServiceObjectiveProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceObjectiveProperties from a JSON string
service_objective_properties_instance = ServiceObjectiveProperties.from_json(json)
# print the JSON string representation of the object
print(ServiceObjectiveProperties.to_json())

# convert the object into a dict
service_objective_properties_dict = service_objective_properties_instance.to_dict()
# create an instance of ServiceObjectiveProperties from a dict
service_objective_properties_from_dict = ServiceObjectiveProperties.from_dict(service_objective_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


