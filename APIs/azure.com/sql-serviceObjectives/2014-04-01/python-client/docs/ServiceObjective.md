# ServiceObjective

Represents a database service objective.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ServiceObjectiveProperties**](ServiceObjectiveProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_objective import ServiceObjective

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceObjective from a JSON string
service_objective_instance = ServiceObjective.from_json(json)
# print the JSON string representation of the object
print(ServiceObjective.to_json())

# convert the object into a dict
service_objective_dict = service_objective_instance.to_dict()
# create an instance of ServiceObjective from a dict
service_objective_from_dict = ServiceObjective.from_dict(service_objective_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


