# DeploymentJsonPhysicalNodeParameters

Description of a bare metal node used for scale unit scale out operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bmc_ip_address** | **str** | BMC address of the physical machine. | [optional] 
**name** | **str** | Computer name of the physical machine. | [optional] 

## Example

```python
from openapi_client.models.deployment_json_physical_node_parameters import DeploymentJsonPhysicalNodeParameters

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentJsonPhysicalNodeParameters from a JSON string
deployment_json_physical_node_parameters_instance = DeploymentJsonPhysicalNodeParameters.from_json(json)
# print the JSON string representation of the object
print(DeploymentJsonPhysicalNodeParameters.to_json())

# convert the object into a dict
deployment_json_physical_node_parameters_dict = deployment_json_physical_node_parameters_instance.to_dict()
# create an instance of DeploymentJsonPhysicalNodeParameters from a dict
deployment_json_physical_node_parameters_from_dict = DeploymentJsonPhysicalNodeParameters.from_dict(deployment_json_physical_node_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


