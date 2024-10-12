# CreateFromJsonScaleUnitParametersList

A list of input data that allows for creating the new scale unit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_name** | **str** | Cluster name for the new scale unit. | [optional] 
**infrastructure_network** | [**NetworkDefinitionParameter**](NetworkDefinitionParameter.md) |  | [optional] 
**net_qos_priority** | **int** | The network QOS priority setting. | [optional] 
**physical_nodes** | [**List[DeploymentJsonPhysicalNodeParameters]**](DeploymentJsonPhysicalNodeParameters.md) | List of nodes in the scale unit. | [optional] 
**software_bgp_asn** | **str** | The software ASN for the cluster&#39;s rack. | [optional] 
**storage_network** | [**NetworkDefinitionParameter**](NetworkDefinitionParameter.md) |  | [optional] 
**tor_switch_bgp_asn** | **str** | The ASN for the cluster&#39;s rack TOR. | [optional] 
**tor_switch_bgp_peer_ip** | **List[str]** | The list of IP addresses used for TOR communication. | [optional] 

## Example

```python
from openapi_client.models.create_from_json_scale_unit_parameters_list import CreateFromJsonScaleUnitParametersList

# TODO update the JSON string below
json = "{}"
# create an instance of CreateFromJsonScaleUnitParametersList from a JSON string
create_from_json_scale_unit_parameters_list_instance = CreateFromJsonScaleUnitParametersList.from_json(json)
# print the JSON string representation of the object
print(CreateFromJsonScaleUnitParametersList.to_json())

# convert the object into a dict
create_from_json_scale_unit_parameters_list_dict = create_from_json_scale_unit_parameters_list_instance.to_dict()
# create an instance of CreateFromJsonScaleUnitParametersList from a dict
create_from_json_scale_unit_parameters_list_from_dict = CreateFromJsonScaleUnitParametersList.from_dict(create_from_json_scale_unit_parameters_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


