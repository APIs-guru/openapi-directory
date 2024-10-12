# TenantAccessGetDefaultResponse

Error Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**TenantAccessGetDefaultResponseError**](TenantAccessGetDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.tenant_access_get_default_response import TenantAccessGetDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TenantAccessGetDefaultResponse from a JSON string
tenant_access_get_default_response_instance = TenantAccessGetDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(TenantAccessGetDefaultResponse.to_json())

# convert the object into a dict
tenant_access_get_default_response_dict = tenant_access_get_default_response_instance.to_dict()
# create an instance of TenantAccessGetDefaultResponse from a dict
tenant_access_get_default_response_from_dict = TenantAccessGetDefaultResponse.from_dict(tenant_access_get_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


