# ServiceLevelObjectiveCapability

The service objectives capability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the service objective. | [optional] [readonly] 
**included_max_size** | [**MaxSizeCapability**](MaxSizeCapability.md) |  | [optional] 
**name** | **str** | The service objective name. | [optional] [readonly] 
**performance_level** | [**PerformanceLevelCapability**](PerformanceLevelCapability.md) |  | [optional] 
**reason** | **str** | The reason for the capability not being available. | [optional] 
**status** | **str** | The status of the capability. | [optional] [readonly] 
**supported_max_sizes** | [**List[MaxSizeCapability]**](MaxSizeCapability.md) | The list of supported maximum database sizes for this service objective. | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_level_objective_capability import ServiceLevelObjectiveCapability

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceLevelObjectiveCapability from a JSON string
service_level_objective_capability_instance = ServiceLevelObjectiveCapability.from_json(json)
# print the JSON string representation of the object
print(ServiceLevelObjectiveCapability.to_json())

# convert the object into a dict
service_level_objective_capability_dict = service_level_objective_capability_instance.to_dict()
# create an instance of ServiceLevelObjectiveCapability from a dict
service_level_objective_capability_from_dict = ServiceLevelObjectiveCapability.from_dict(service_level_objective_capability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


