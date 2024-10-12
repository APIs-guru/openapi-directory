# ReplicationObject

Replication properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint_type** | **str** | Indicates whether the local volume is the source or destination for the Volume Replication | 
**remote_volume_resource_id** | **str** | The resource ID of the remote volume. | 
**replication_id** | **str** | Id | [optional] 
**replication_schedule** | **str** | Schedule | 

## Example

```python
from openapi_client.models.replication_object import ReplicationObject

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicationObject from a JSON string
replication_object_instance = ReplicationObject.from_json(json)
# print the JSON string representation of the object
print(ReplicationObject.to_json())

# convert the object into a dict
replication_object_dict = replication_object_instance.to_dict()
# create an instance of ReplicationObject from a dict
replication_object_from_dict = ReplicationObject.from_dict(replication_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


