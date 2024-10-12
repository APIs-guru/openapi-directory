# TenantAccessUpdateDefaultResponse

Error Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**TenantAccessUpdateDefaultResponseError**](TenantAccessUpdateDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.tenant_access_update_default_response import TenantAccessUpdateDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TenantAccessUpdateDefaultResponse from a JSON string
tenant_access_update_default_response_instance = TenantAccessUpdateDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(TenantAccessUpdateDefaultResponse.to_json())

# convert the object into a dict
tenant_access_update_default_response_dict = tenant_access_update_default_response_instance.to_dict()
# create an instance of TenantAccessUpdateDefaultResponse from a dict
tenant_access_update_default_response_from_dict = TenantAccessUpdateDefaultResponse.from_dict(tenant_access_update_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


