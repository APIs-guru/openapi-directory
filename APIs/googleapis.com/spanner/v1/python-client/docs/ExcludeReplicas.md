# ExcludeReplicas

An ExcludeReplicas contains a repeated set of ReplicaSelection that should be excluded from serving requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**replica_selections** | [**List[ReplicaSelection]**](ReplicaSelection.md) | The directed read replica selector. | [optional] 

## Example

```python
from openapi_client.models.exclude_replicas import ExcludeReplicas

# TODO update the JSON string below
json = "{}"
# create an instance of ExcludeReplicas from a JSON string
exclude_replicas_instance = ExcludeReplicas.from_json(json)
# print the JSON string representation of the object
print(ExcludeReplicas.to_json())

# convert the object into a dict
exclude_replicas_dict = exclude_replicas_instance.to_dict()
# create an instance of ExcludeReplicas from a dict
exclude_replicas_from_dict = ExcludeReplicas.from_dict(exclude_replicas_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


