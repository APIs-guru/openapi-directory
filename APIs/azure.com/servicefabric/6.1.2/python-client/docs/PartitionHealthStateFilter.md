# PartitionHealthStateFilter

Defines matching criteria to determine whether a partition should be included as a child of a service in the cluster health chunk. The partitions are only returned if the parent entities match a filter specified in the cluster health chunk query description. The parent service and application must be included in the cluster health chunk. One filter can match zero, one or multiple partitions, depending on its properties. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**health_state_filter** | **int** | The filter for the health state of the partitions. It allows selecting partitions if they match the desired health states. The possible values are integer value of one of the following health states. Only partitions that match the filter are returned. All partitions are used to evaluate the cluster aggregated health state. If not specified, default value is None, unless the partition id is specified. If the filter has default value and partition id is specified, the matching partition is returned. The state values are flag based enumeration, so the value could be a combination of these values obtained using bitwise &#39;OR&#39; operator. For example, if the provided value is 6, it matches partitions with HealthState value of OK (2) and Warning (4).  - Default - Default value. Matches any HealthState. The value is zero. - None - Filter that doesn&#39;t match any HealthState value. Used in order to return no results on a given collection of states. The value is 1. - Ok - Filter that matches input with HealthState value Ok. The value is 2. - Warning - Filter that matches input with HealthState value Warning. The value is 4. - Error - Filter that matches input with HealthState value Error. The value is 8. - All - Filter that matches input with any HealthState value. The value is 65535.  | [optional] 
**partition_id_filter** | **str** | ID of the partition that matches the filter. The filter is applied only to the specified partition, if it exists. If the partition doesn&#39;t exist, no partition is returned in the cluster health chunk based on this filter. If the partition exists, it is included in the cluster health chunk if it respects the other filter properties. If not specified, all partitions that match the parent filters (if any) are taken into consideration and matched against the other filter members, like health state filter.  | [optional] 
**replica_filters** | [**List[ReplicaHealthStateFilter]**](ReplicaHealthStateFilter.md) | Defines a list of filters that specify which replicas to be included in the returned cluster health chunk as children of the parent partition. The replicas are returned only if the parent partition matches a filter. If the list is empty, no replicas are returned. All the replicas are used to evaluate the parent partition aggregated health state, regardless of the input filters. The partition filter may specify multiple replica filters. For example, it can specify a filter to return all replicas with health state Error and another filter to always include a replica identified by its replica id.  | [optional] 

## Example

```python
from openapi_client.models.partition_health_state_filter import PartitionHealthStateFilter

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionHealthStateFilter from a JSON string
partition_health_state_filter_instance = PartitionHealthStateFilter.from_json(json)
# print the JSON string representation of the object
print(PartitionHealthStateFilter.to_json())

# convert the object into a dict
partition_health_state_filter_dict = partition_health_state_filter_instance.to_dict()
# create an instance of PartitionHealthStateFilter from a dict
partition_health_state_filter_from_dict = PartitionHealthStateFilter.from_dict(partition_health_state_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


