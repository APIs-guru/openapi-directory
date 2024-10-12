# TenantConfigurationSaveRequest

Save Tenant Configuration Contract details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TenantConfigurationSaveRequestProperties**](TenantConfigurationSaveRequestProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.tenant_configuration_save_request import TenantConfigurationSaveRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TenantConfigurationSaveRequest from a JSON string
tenant_configuration_save_request_instance = TenantConfigurationSaveRequest.from_json(json)
# print the JSON string representation of the object
print(TenantConfigurationSaveRequest.to_json())

# convert the object into a dict
tenant_configuration_save_request_dict = tenant_configuration_save_request_instance.to_dict()
# create an instance of TenantConfigurationSaveRequest from a dict
tenant_configuration_save_request_from_dict = TenantConfigurationSaveRequest.from_dict(tenant_configuration_save_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


