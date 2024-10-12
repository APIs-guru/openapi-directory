# AmlComputeAllOfProperties

AML Compute properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocation_state** | **str** | Allocation state of the compute. Possible values are: steady - Indicates that the compute is not resizing. There are no changes to the number of compute nodes in the compute in progress. A compute enters this state when it is created and when no operations are being performed on the compute to change the number of compute nodes. resizing - Indicates that the compute is resizing; that is, compute nodes are being added to or removed from the compute. | [optional] [readonly] 
**allocation_state_transition_time** | **datetime** | The time at which the compute entered its current allocation state. | [optional] [readonly] 
**current_node_count** | **int** | The number of compute nodes currently assigned to the compute. | [optional] [readonly] 
**errors** | [**List[MachineLearningServiceError]**](MachineLearningServiceError.md) | Collection of errors encountered by various compute nodes during node setup. | [optional] [readonly] 
**node_state_counts** | [**NodeStateCounts**](NodeStateCounts.md) |  | [optional] 
**remote_login_port_public_access** | **str** | State of the public SSH port. Possible values are: Disabled - Indicates that the public ssh port is closed on all nodes of the cluster. Enabled - Indicates that the public ssh port is open on all nodes of the cluster. NotSpecified - Indicates that the public ssh port is closed on all nodes of the cluster if VNet is defined, else is open all public nodes. It can be default only during cluster creation time, after creation it will be either enabled or disabled. | [optional] [default to 'NotSpecified']
**scale_settings** | [**ScaleSettings**](ScaleSettings.md) |  | [optional] 
**subnet** | [**ResourceId**](ResourceId.md) |  | [optional] 
**target_node_count** | **int** | The target number of compute nodes for the compute. If the allocationState is resizing, this property denotes the target node count for the ongoing resize operation. If the allocationState is steady, this property denotes the target node count for the previous resize operation. | [optional] [readonly] 
**user_account_credentials** | [**UserAccountCredentials**](UserAccountCredentials.md) |  | [optional] 
**vm_priority** | **str** | Virtual Machine priority | [optional] 
**vm_size** | **str** | Virtual Machine Size | [optional] 

## Example

```python
from openapi_client.models.aml_compute_all_of_properties import AmlComputeAllOfProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AmlComputeAllOfProperties from a JSON string
aml_compute_all_of_properties_instance = AmlComputeAllOfProperties.from_json(json)
# print the JSON string representation of the object
print(AmlComputeAllOfProperties.to_json())

# convert the object into a dict
aml_compute_all_of_properties_dict = aml_compute_all_of_properties_instance.to_dict()
# create an instance of AmlComputeAllOfProperties from a dict
aml_compute_all_of_properties_from_dict = AmlComputeAllOfProperties.from_dict(aml_compute_all_of_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


