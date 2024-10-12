# ReplicaInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_leader_location** | **bool** | If true, this location is designated as the default leader location where leader replicas are placed. See the [region types documentation](https://cloud.google.com/spanner/docs/instances#region_types) for more details. | [optional] 
**location** | **str** | The location of the serving resources, e.g., \&quot;us-central1\&quot;. | [optional] 
**type** | **str** | The type of replica. | [optional] 

## Example

```python
from openapi_client.models.replica_info import ReplicaInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicaInfo from a JSON string
replica_info_instance = ReplicaInfo.from_json(json)
# print the JSON string representation of the object
print(ReplicaInfo.to_json())

# convert the object into a dict
replica_info_dict = replica_info_instance.to_dict()
# create an instance of ReplicaInfo from a dict
replica_info_from_dict = ReplicaInfo.from_dict(replica_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


