# ReplicaHealthStateFilter

Defines matching criteria to determine whether a replica should be included as a child of a partition in the cluster health chunk. The replicas are only returned if the parent entities match a filter specified in the cluster health chunk query description. The parent partition, service and application must be included in the cluster health chunk. One filter can match zero, one or multiple replicas, depending on its properties. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**health_state_filter** | **int** | The filter for the health state of the replicas. It allows selecting replicas if they match the desired health states. The possible values are integer value of one of the following health states. Only replicas that match the filter are returned. All replicas are used to evaluate the parent partition aggregated health state. If not specified, default value is None, unless the replica id is specified. If the filter has default value and replica id is specified, the matching replica is returned. The state values are flag based enumeration, so the value could be a combination of these values obtained using bitwise &#39;OR&#39; operator. For example, if the provided value is 6, it matches replicas with HealthState value of OK (2) and Warning (4).  - Default - Default value. Matches any HealthState. The value is zero. - None - Filter that doesn&#39;t match any HealthState value. Used in order to return no results on a given collection of states. The value is 1. - Ok - Filter that matches input with HealthState value Ok. The value is 2. - Warning - Filter that matches input with HealthState value Warning. The value is 4. - Error - Filter that matches input with HealthState value Error. The value is 8. - All - Filter that matches input with any HealthState value. The value is 65535.  | [optional] 
**replica_or_instance_id_filter** | **str** | Id of the stateful service replica or stateles service instance that matches the filter. The filter is applied only to the specified replica, if it exists. If the replica doesn&#39;t exist, no replica is returned in the cluster health chunk based on this filter. If the replica exists, it is included in the cluster health chunk if it respects the other filter properties. If not specified, all replicas that match the parent filters (if any) are taken into consideration and matched against the other filter members, like health state filter.  | [optional] 

## Example

```python
from openapi_client.models.replica_health_state_filter import ReplicaHealthStateFilter

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicaHealthStateFilter from a JSON string
replica_health_state_filter_instance = ReplicaHealthStateFilter.from_json(json)
# print the JSON string representation of the object
print(ReplicaHealthStateFilter.to_json())

# convert the object into a dict
replica_health_state_filter_dict = replica_health_state_filter_instance.to_dict()
# create an instance of ReplicaHealthStateFilter from a dict
replica_health_state_filter_from_dict = ReplicaHealthStateFilter.from_dict(replica_health_state_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


