# TenantConfigurationDeployRequest

Deploy Tenant Configuration Contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TenantConfigurationDeployRequestProperties**](TenantConfigurationDeployRequestProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.tenant_configuration_deploy_request import TenantConfigurationDeployRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TenantConfigurationDeployRequest from a JSON string
tenant_configuration_deploy_request_instance = TenantConfigurationDeployRequest.from_json(json)
# print the JSON string representation of the object
print(TenantConfigurationDeployRequest.to_json())

# convert the object into a dict
tenant_configuration_deploy_request_dict = tenant_configuration_deploy_request_instance.to_dict()
# create an instance of TenantConfigurationDeployRequest from a dict
tenant_configuration_deploy_request_from_dict = TenantConfigurationDeployRequest.from_dict(tenant_configuration_deploy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


