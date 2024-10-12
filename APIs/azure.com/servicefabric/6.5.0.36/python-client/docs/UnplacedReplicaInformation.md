# UnplacedReplicaInformation

Contains information for an unplaced replica.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partition_id** | **str** | An internal ID used by Service Fabric to uniquely identify a partition. This is a randomly generated GUID when the service was created. The partition ID is unique and does not change for the lifetime of the service. If the same service was deleted and recreated the IDs of its partitions would be different. | [optional] 
**service_name** | **str** | The full name of the service with &#39;fabric:&#39; URI scheme. | [optional] 
**unplaced_replica_details** | **List[str]** | List of reasons due to which a replica cannot be placed. | [optional] 

## Example

```python
from openapi_client.models.unplaced_replica_information import UnplacedReplicaInformation

# TODO update the JSON string below
json = "{}"
# create an instance of UnplacedReplicaInformation from a JSON string
unplaced_replica_information_instance = UnplacedReplicaInformation.from_json(json)
# print the JSON string representation of the object
print(UnplacedReplicaInformation.to_json())

# convert the object into a dict
unplaced_replica_information_dict = unplaced_replica_information_instance.to_dict()
# create an instance of UnplacedReplicaInformation from a dict
unplaced_replica_information_from_dict = UnplacedReplicaInformation.from_dict(unplaced_replica_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


