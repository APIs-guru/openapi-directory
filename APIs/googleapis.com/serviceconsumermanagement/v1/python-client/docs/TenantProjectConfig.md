# TenantProjectConfig

This structure defines a tenant project to be added to the specified tenancy unit and its initial configuration and properties. A project lien is created for the tenant project to prevent the tenant project from being deleted accidentally. The lien is deleted as part of tenant project removal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_config** | [**BillingConfig**](BillingConfig.md) |  | [optional] 
**folder** | **str** | Folder where project in this tenancy unit must be located This folder must have been previously created with the required permissions for the caller to create and configure a project in it. Valid folder resource names have the format &#x60;folders/{folder_number}&#x60; (for example, &#x60;folders/123456&#x60;). | [optional] 
**labels** | **Dict[str, str]** | Labels that are applied to this project. | [optional] 
**service_account_config** | [**ServiceAccountConfig**](ServiceAccountConfig.md) |  | [optional] 
**services** | **List[str]** | Google Cloud API names of services that are activated on this project during provisioning. If any of these services can&#39;t be activated, the request fails. For example: &#39;compute.googleapis.com&#39;,&#39;cloudfunctions.googleapis.com&#39; | [optional] 
**tenant_project_policy** | [**TenantProjectPolicy**](TenantProjectPolicy.md) |  | [optional] 

## Example

```python
from openapi_client.models.tenant_project_config import TenantProjectConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TenantProjectConfig from a JSON string
tenant_project_config_instance = TenantProjectConfig.from_json(json)
# print the JSON string representation of the object
print(TenantProjectConfig.to_json())

# convert the object into a dict
tenant_project_config_dict = tenant_project_config_instance.to_dict()
# create an instance of TenantProjectConfig from a dict
tenant_project_config_from_dict = TenantProjectConfig.from_dict(tenant_project_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


