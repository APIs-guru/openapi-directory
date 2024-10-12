# TenantAccessUpdateDefaultResponseDetailsInner

Error Field contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Property level error code. | [optional] 
**message** | **str** | Human-readable representation of property-level error. | [optional] 
**target** | **str** | Property name. | [optional] 

## Example

```python
from openapi_client.models.tenant_access_update_default_response_details_inner import TenantAccessUpdateDefaultResponseDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of TenantAccessUpdateDefaultResponseDetailsInner from a JSON string
tenant_access_update_default_response_details_inner_instance = TenantAccessUpdateDefaultResponseDetailsInner.from_json(json)
# print the JSON string representation of the object
print(TenantAccessUpdateDefaultResponseDetailsInner.to_json())

# convert the object into a dict
tenant_access_update_default_response_details_inner_dict = tenant_access_update_default_response_details_inner_instance.to_dict()
# create an instance of TenantAccessUpdateDefaultResponseDetailsInner from a dict
tenant_access_update_default_response_details_inner_from_dict = TenantAccessUpdateDefaultResponseDetailsInner.from_dict(tenant_access_update_default_response_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


