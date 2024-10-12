# AKSReplicaStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_replicas** | **int** | The number of available replicas. | [optional] 
**desired_replicas** | **int** | The desired number of replicas. | [optional] 
**error** | [**ModelErrorResponse**](ModelErrorResponse.md) |  | [optional] 
**updated_replicas** | **int** | The number of updated replicas. | [optional] 

## Example

```python
from openapi_client.models.aks_replica_status import AKSReplicaStatus

# TODO update the JSON string below
json = "{}"
# create an instance of AKSReplicaStatus from a JSON string
aks_replica_status_instance = AKSReplicaStatus.from_json(json)
# print the JSON string representation of the object
print(AKSReplicaStatus.to_json())

# convert the object into a dict
aks_replica_status_dict = aks_replica_status_instance.to_dict()
# create an instance of AKSReplicaStatus from a dict
aks_replica_status_from_dict = AKSReplicaStatus.from_dict(aks_replica_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


