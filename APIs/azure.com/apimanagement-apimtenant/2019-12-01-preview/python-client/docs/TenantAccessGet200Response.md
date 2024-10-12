# TenantAccessGet200Response

Tenant access information contract of the API Management service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Determines whether direct access is enabled. | [optional] 
**id** | **str** | Identifier. | [optional] 
**primary_key** | **str** | Primary access key. This property will not be filled on &#39;GET&#39; operations! Use &#39;/listSecrets&#39; POST request to get the value. | [optional] 
**secondary_key** | **str** | Secondary access key. This property will not be filled on &#39;GET&#39; operations! Use &#39;/listSecrets&#39; POST request to get the value. | [optional] 

## Example

```python
from openapi_client.models.tenant_access_get200_response import TenantAccessGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of TenantAccessGet200Response from a JSON string
tenant_access_get200_response_instance = TenantAccessGet200Response.from_json(json)
# print the JSON string representation of the object
print(TenantAccessGet200Response.to_json())

# convert the object into a dict
tenant_access_get200_response_dict = tenant_access_get200_response_instance.to_dict()
# create an instance of TenantAccessGet200Response from a dict
tenant_access_get200_response_from_dict = TenantAccessGet200Response.from_dict(tenant_access_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


