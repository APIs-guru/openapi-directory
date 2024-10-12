# TenantAccessUpdateRequest

Tenant access information update parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TenantAccessUpdateRequestProperties**](TenantAccessUpdateRequestProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.tenant_access_update_request import TenantAccessUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TenantAccessUpdateRequest from a JSON string
tenant_access_update_request_instance = TenantAccessUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(TenantAccessUpdateRequest.to_json())

# convert the object into a dict
tenant_access_update_request_dict = tenant_access_update_request_instance.to_dict()
# create an instance of TenantAccessUpdateRequest from a dict
tenant_access_update_request_from_dict = TenantAccessUpdateRequest.from_dict(tenant_access_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


