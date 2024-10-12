# TenantAccessGetDefaultResponseError

Error Body contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response. | [optional] 
**details** | [**List[TenantAccessGetDefaultResponseErrorDetailsInner]**](TenantAccessGetDefaultResponseErrorDetailsInner.md) | The list of invalid fields send in request, in case of validation error. | [optional] 
**message** | **str** | Human-readable representation of the error. | [optional] 

## Example

```python
from openapi_client.models.tenant_access_get_default_response_error import TenantAccessGetDefaultResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of TenantAccessGetDefaultResponseError from a JSON string
tenant_access_get_default_response_error_instance = TenantAccessGetDefaultResponseError.from_json(json)
# print the JSON string representation of the object
print(TenantAccessGetDefaultResponseError.to_json())

# convert the object into a dict
tenant_access_get_default_response_error_dict = tenant_access_get_default_response_error_instance.to_dict()
# create an instance of TenantAccessGetDefaultResponseError from a dict
tenant_access_get_default_response_error_from_dict = TenantAccessGetDefaultResponseError.from_dict(tenant_access_get_default_response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


