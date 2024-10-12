# ApplyTenantProjectConfigRequest

Request to apply configuration to an existing tenant project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**project_config** | [**TenantProjectConfig**](TenantProjectConfig.md) |  | [optional] 
**tag** | **str** | Required. Tag of the project. Must be less than 128 characters. Required. | [optional] 

## Example

```python
from openapi_client.models.apply_tenant_project_config_request import ApplyTenantProjectConfigRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApplyTenantProjectConfigRequest from a JSON string
apply_tenant_project_config_request_instance = ApplyTenantProjectConfigRequest.from_json(json)
# print the JSON string representation of the object
print(ApplyTenantProjectConfigRequest.to_json())

# convert the object into a dict
apply_tenant_project_config_request_dict = apply_tenant_project_config_request_instance.to_dict()
# create an instance of ApplyTenantProjectConfigRequest from a dict
apply_tenant_project_config_request_from_dict = ApplyTenantProjectConfigRequest.from_dict(apply_tenant_project_config_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


