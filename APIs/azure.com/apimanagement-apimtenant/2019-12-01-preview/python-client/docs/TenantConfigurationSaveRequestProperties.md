# TenantConfigurationSaveRequestProperties

Parameters supplied to the Save Tenant Configuration operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch** | **str** | The name of the Git branch in which to commit the current configuration snapshot. | 
**force** | **bool** | The value if true, the current configuration database is committed to the Git repository, even if the Git repository has newer changes that would be overwritten. | [optional] 

## Example

```python
from openapi_client.models.tenant_configuration_save_request_properties import TenantConfigurationSaveRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TenantConfigurationSaveRequestProperties from a JSON string
tenant_configuration_save_request_properties_instance = TenantConfigurationSaveRequestProperties.from_json(json)
# print the JSON string representation of the object
print(TenantConfigurationSaveRequestProperties.to_json())

# convert the object into a dict
tenant_configuration_save_request_properties_dict = tenant_configuration_save_request_properties_instance.to_dict()
# create an instance of TenantConfigurationSaveRequestProperties from a dict
tenant_configuration_save_request_properties_from_dict = TenantConfigurationSaveRequestProperties.from_dict(tenant_configuration_save_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


