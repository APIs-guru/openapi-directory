# TenantAccessUpdateRequestProperties

Tenant access information update parameters of the API Management service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Determines whether direct access is enabled. | [optional] 

## Example

```python
from openapi_client.models.tenant_access_update_request_properties import TenantAccessUpdateRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TenantAccessUpdateRequestProperties from a JSON string
tenant_access_update_request_properties_instance = TenantAccessUpdateRequestProperties.from_json(json)
# print the JSON string representation of the object
print(TenantAccessUpdateRequestProperties.to_json())

# convert the object into a dict
tenant_access_update_request_properties_dict = tenant_access_update_request_properties_instance.to_dict()
# create an instance of TenantAccessUpdateRequestProperties from a dict
tenant_access_update_request_properties_from_dict = TenantAccessUpdateRequestProperties.from_dict(tenant_access_update_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


