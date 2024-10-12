# TenantAccessGetDefaultResponseErrorDetailsInner

Error Field contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Property level error code. | [optional] 
**message** | **str** | Human-readable representation of property-level error. | [optional] 
**target** | **str** | Property name. | [optional] 

## Example

```python
from openapi_client.models.tenant_access_get_default_response_error_details_inner import TenantAccessGetDefaultResponseErrorDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of TenantAccessGetDefaultResponseErrorDetailsInner from a JSON string
tenant_access_get_default_response_error_details_inner_instance = TenantAccessGetDefaultResponseErrorDetailsInner.from_json(json)
# print the JSON string representation of the object
print(TenantAccessGetDefaultResponseErrorDetailsInner.to_json())

# convert the object into a dict
tenant_access_get_default_response_error_details_inner_dict = tenant_access_get_default_response_error_details_inner_instance.to_dict()
# create an instance of TenantAccessGetDefaultResponseErrorDetailsInner from a dict
tenant_access_get_default_response_error_details_inner_from_dict = TenantAccessGetDefaultResponseErrorDetailsInner.from_dict(tenant_access_get_default_response_error_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


