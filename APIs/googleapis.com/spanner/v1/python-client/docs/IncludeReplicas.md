# IncludeReplicas

An IncludeReplicas contains a repeated set of ReplicaSelection which indicates the order in which replicas should be considered.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_failover_disabled** | **bool** | If true, Spanner will not route requests to a replica outside the include_replicas list when all of the specified replicas are unavailable or unhealthy. Default value is &#x60;false&#x60;. | [optional] 
**replica_selections** | [**List[ReplicaSelection]**](ReplicaSelection.md) | The directed read replica selector. | [optional] 

## Example

```python
from openapi_client.models.include_replicas import IncludeReplicas

# TODO update the JSON string below
json = "{}"
# create an instance of IncludeReplicas from a JSON string
include_replicas_instance = IncludeReplicas.from_json(json)
# print the JSON string representation of the object
print(IncludeReplicas.to_json())

# convert the object into a dict
include_replicas_dict = include_replicas_instance.to_dict()
# create an instance of IncludeReplicas from a dict
include_replicas_from_dict = IncludeReplicas.from_dict(include_replicas_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


