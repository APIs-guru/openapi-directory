# WaitForInbuildReplicaSafetyCheck

Safety check that waits for the replica build operation to finish. This indiciates that there is a replica that is going through the copy or is providing data for building another replica. Bring the node down will abort this copy operation which are typoically expensive involving data movements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from openapi_client.models.wait_for_inbuild_replica_safety_check import WaitForInbuildReplicaSafetyCheck

# TODO update the JSON string below
json = "{}"
# create an instance of WaitForInbuildReplicaSafetyCheck from a JSON string
wait_for_inbuild_replica_safety_check_instance = WaitForInbuildReplicaSafetyCheck.from_json(json)
# print the JSON string representation of the object
print(WaitForInbuildReplicaSafetyCheck.to_json())

# convert the object into a dict
wait_for_inbuild_replica_safety_check_dict = wait_for_inbuild_replica_safety_check_instance.to_dict()
# create an instance of WaitForInbuildReplicaSafetyCheck from a dict
wait_for_inbuild_replica_safety_check_from_dict = WaitForInbuildReplicaSafetyCheck.from_dict(wait_for_inbuild_replica_safety_check_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


