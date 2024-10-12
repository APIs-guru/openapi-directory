# PerformanceTierProperties

Performance tier properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_retention_days** | **int** | Backup retention in days for the performance tier edition | [optional] 
**id** | **str** | ID of the performance tier. | [optional] 
**service_level_objectives** | [**List[PerformanceTierServiceLevelObjectives]**](PerformanceTierServiceLevelObjectives.md) | Service level objectives associated with the performance tier | [optional] 

## Example

```python
from openapi_client.models.performance_tier_properties import PerformanceTierProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PerformanceTierProperties from a JSON string
performance_tier_properties_instance = PerformanceTierProperties.from_json(json)
# print the JSON string representation of the object
print(PerformanceTierProperties.to_json())

# convert the object into a dict
performance_tier_properties_dict = performance_tier_properties_instance.to_dict()
# create an instance of PerformanceTierProperties from a dict
performance_tier_properties_from_dict = PerformanceTierProperties.from_dict(performance_tier_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


