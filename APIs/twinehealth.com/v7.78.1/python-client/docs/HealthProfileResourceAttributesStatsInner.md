# HealthProfileResourceAttributesStatsInner

The category, answered and total counts for questions in the health profile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answered** | **float** |  | [optional] 
**category** | **str** |  | [optional] 
**total** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.health_profile_resource_attributes_stats_inner import HealthProfileResourceAttributesStatsInner

# TODO update the JSON string below
json = "{}"
# create an instance of HealthProfileResourceAttributesStatsInner from a JSON string
health_profile_resource_attributes_stats_inner_instance = HealthProfileResourceAttributesStatsInner.from_json(json)
# print the JSON string representation of the object
print(HealthProfileResourceAttributesStatsInner.to_json())

# convert the object into a dict
health_profile_resource_attributes_stats_inner_dict = health_profile_resource_attributes_stats_inner_instance.to_dict()
# create an instance of HealthProfileResourceAttributesStatsInner from a dict
health_profile_resource_attributes_stats_inner_from_dict = HealthProfileResourceAttributesStatsInner.from_dict(health_profile_resource_attributes_stats_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


