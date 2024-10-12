# PerformanceTierServiceLevelObjectives

Service level objectives for performance tier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dtu** | **int** | Database throughput unit associated with the service level objective | [optional] 
**edition** | **str** | Edition of the performance tier. | [optional] 
**id** | **str** | ID for the service level objective. | [optional] 
**storage_mb** | **int** | Maximum storage in MB associated with the service level objective | [optional] 

## Example

```python
from openapi_client.models.performance_tier_service_level_objectives import PerformanceTierServiceLevelObjectives

# TODO update the JSON string below
json = "{}"
# create an instance of PerformanceTierServiceLevelObjectives from a JSON string
performance_tier_service_level_objectives_instance = PerformanceTierServiceLevelObjectives.from_json(json)
# print the JSON string representation of the object
print(PerformanceTierServiceLevelObjectives.to_json())

# convert the object into a dict
performance_tier_service_level_objectives_dict = performance_tier_service_level_objectives_instance.to_dict()
# create an instance of PerformanceTierServiceLevelObjectives from a dict
performance_tier_service_level_objectives_from_dict = PerformanceTierServiceLevelObjectives.from_dict(performance_tier_service_level_objectives_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


