# TenantConfigurationDeployRequestProperties

Parameters supplied to the Deploy Configuration operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch** | **str** | The name of the Git branch from which the configuration is to be deployed to the configuration database. | 
**force** | **bool** | The value enforcing deleting subscriptions to products that are deleted in this update. | [optional] 

## Example

```python
from openapi_client.models.tenant_configuration_deploy_request_properties import TenantConfigurationDeployRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TenantConfigurationDeployRequestProperties from a JSON string
tenant_configuration_deploy_request_properties_instance = TenantConfigurationDeployRequestProperties.from_json(json)
# print the JSON string representation of the object
print(TenantConfigurationDeployRequestProperties.to_json())

# convert the object into a dict
tenant_configuration_deploy_request_properties_dict = tenant_configuration_deploy_request_properties_instance.to_dict()
# create an instance of TenantConfigurationDeployRequestProperties from a dict
tenant_configuration_deploy_request_properties_from_dict = TenantConfigurationDeployRequestProperties.from_dict(tenant_configuration_deploy_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


