# ReplicaLoadInformation

The information of the replica load

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partition_id** | **str** |  | [optional] 
**replica_or_instance_id** | **str** |  | [optional] 
**reported_load** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.replica_load_information import ReplicaLoadInformation

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicaLoadInformation from a JSON string
replica_load_information_instance = ReplicaLoadInformation.from_json(json)
# print the JSON string representation of the object
print(ReplicaLoadInformation.to_json())

# convert the object into a dict
replica_load_information_dict = replica_load_information_instance.to_dict()
# create an instance of ReplicaLoadInformation from a dict
replica_load_information_from_dict = ReplicaLoadInformation.from_dict(replica_load_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


