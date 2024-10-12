# HyperVReplicaPolicyInput

Hyper-V Replica specific policy Input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_authentication_type** | **int** | A value indicating the authentication type. | [optional] 
**application_consistent_snapshot_frequency_in_hours** | **int** | A value indicating the application consistent frequency. | [optional] 
**compression** | **str** | A value indicating whether compression has to be enabled. | [optional] 
**initial_replication_method** | **str** | A value indicating whether IR is online. | [optional] 
**offline_replication_export_path** | **str** | A value indicating the offline IR export path. | [optional] 
**offline_replication_import_path** | **str** | A value indicating the offline IR import path. | [optional] 
**online_replication_start_time** | **str** | A value indicating the online IR start time. | [optional] 
**recovery_points** | **int** | A value indicating the number of recovery points. | [optional] 
**replica_deletion** | **str** | A value indicating whether the VM has to be auto deleted. | [optional] 
**replication_port** | **int** | A value indicating the recovery HTTPS port. | [optional] 

## Example

```python
from openapi_client.models.hyper_v_replica_policy_input import HyperVReplicaPolicyInput

# TODO update the JSON string below
json = "{}"
# create an instance of HyperVReplicaPolicyInput from a JSON string
hyper_v_replica_policy_input_instance = HyperVReplicaPolicyInput.from_json(json)
# print the JSON string representation of the object
print(HyperVReplicaPolicyInput.to_json())

# convert the object into a dict
hyper_v_replica_policy_input_dict = hyper_v_replica_policy_input_instance.to_dict()
# create an instance of HyperVReplicaPolicyInput from a dict
hyper_v_replica_policy_input_from_dict = HyperVReplicaPolicyInput.from_dict(hyper_v_replica_policy_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


