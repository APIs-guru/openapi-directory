# HealthStatistics

The health statistics of an entity, returned as part of the health query result when the query description is configured to include statistics. The statistics include health state counts for all children types of the current entity. For example, for cluster, the health statistics include health state counts for nodes, applications, services, partitions, replicas, deployed applications and deployed service packages. For partition, the health statistics include health counts for replicas. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**health_state_count_list** | [**List[EntityKindHealthStateCount]**](EntityKindHealthStateCount.md) | List of health state counts per entity kind, which keeps track of how many children of the queried entity are in Ok, Warning and Error state.  | [optional] 

## Example

```python
from openapi_client.models.health_statistics import HealthStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of HealthStatistics from a JSON string
health_statistics_instance = HealthStatistics.from_json(json)
# print the JSON string representation of the object
print(HealthStatistics.to_json())

# convert the object into a dict
health_statistics_dict = health_statistics_instance.to_dict()
# create an instance of HealthStatistics from a dict
health_statistics_from_dict = HealthStatistics.from_dict(health_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


