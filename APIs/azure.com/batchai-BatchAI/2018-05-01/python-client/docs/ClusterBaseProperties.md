# ClusterBaseProperties

The properties of a Cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_setup** | [**NodeSetup**](NodeSetup.md) |  | [optional] 
**scale_settings** | [**ScaleSettings**](ScaleSettings.md) |  | [optional] 
**subnet** | [**ResourceId**](ResourceId.md) |  | [optional] 
**user_account_settings** | [**UserAccountSettings**](UserAccountSettings.md) |  | 
**virtual_machine_configuration** | [**VirtualMachineConfiguration**](VirtualMachineConfiguration.md) |  | [optional] 
**vm_priority** | **str** | VM priority. Allowed values are: dedicated (default) and lowpriority. | [optional] [default to 'dedicated']
**vm_size** | **str** | The size of the virtual machines in the cluster. All nodes in a cluster have the same VM size. For information about available VM sizes for clusters using images from the Virtual Machines Marketplace see Sizes for Virtual Machines (Linux). Batch AI service supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series). | 

## Example

```python
from openapi_client.models.cluster_base_properties import ClusterBaseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterBaseProperties from a JSON string
cluster_base_properties_instance = ClusterBaseProperties.from_json(json)
# print the JSON string representation of the object
print(ClusterBaseProperties.to_json())

# convert the object into a dict
cluster_base_properties_dict = cluster_base_properties_instance.to_dict()
# create an instance of ClusterBaseProperties from a dict
cluster_base_properties_from_dict = ClusterBaseProperties.from_dict(cluster_base_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


