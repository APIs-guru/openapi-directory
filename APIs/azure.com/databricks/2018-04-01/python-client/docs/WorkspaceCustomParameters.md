# WorkspaceCustomParameters

Custom Parameters used for Cluster Creation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aml_workspace_id** | [**WorkspaceCustomStringParameter**](WorkspaceCustomStringParameter.md) |  | [optional] 
**custom_private_subnet_name** | [**WorkspaceCustomStringParameter**](WorkspaceCustomStringParameter.md) |  | [optional] 
**custom_public_subnet_name** | [**WorkspaceCustomStringParameter**](WorkspaceCustomStringParameter.md) |  | [optional] 
**custom_virtual_network_id** | [**WorkspaceCustomStringParameter**](WorkspaceCustomStringParameter.md) |  | [optional] 
**enable_no_public_ip** | [**WorkspaceCustomBooleanParameter**](WorkspaceCustomBooleanParameter.md) |  | [optional] 
**load_balancer_backend_pool_name** | [**WorkspaceCustomStringParameter**](WorkspaceCustomStringParameter.md) |  | [optional] 
**load_balancer_id** | [**WorkspaceCustomStringParameter**](WorkspaceCustomStringParameter.md) |  | [optional] 
**relay_namespace_name** | [**WorkspaceCustomStringParameter**](WorkspaceCustomStringParameter.md) |  | [optional] 
**resource_tags** | [**WorkspaceCustomObjectParameter**](WorkspaceCustomObjectParameter.md) |  | [optional] 
**storage_account_name** | [**WorkspaceCustomStringParameter**](WorkspaceCustomStringParameter.md) |  | [optional] 
**storage_account_sku_name** | [**WorkspaceCustomStringParameter**](WorkspaceCustomStringParameter.md) |  | [optional] 
**vnet_address_prefix** | [**WorkspaceCustomStringParameter**](WorkspaceCustomStringParameter.md) |  | [optional] 

## Example

```python
from openapi_client.models.workspace_custom_parameters import WorkspaceCustomParameters

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspaceCustomParameters from a JSON string
workspace_custom_parameters_instance = WorkspaceCustomParameters.from_json(json)
# print the JSON string representation of the object
print(WorkspaceCustomParameters.to_json())

# convert the object into a dict
workspace_custom_parameters_dict = workspace_custom_parameters_instance.to_dict()
# create an instance of WorkspaceCustomParameters from a dict
workspace_custom_parameters_from_dict = WorkspaceCustomParameters.from_dict(workspace_custom_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


