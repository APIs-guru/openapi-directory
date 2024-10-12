# AADTenantAddRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aad_tenant_id** | **str** | The AAD tenant id | 
**display_name** | **str** | The name of the AAD Tenant | 
**user_id** | **str** | The user wanting to add this tenant to the organization, must be an admin of the organization | 

## Example

```python
from openapi_client.models.aad_tenant_add_request import AADTenantAddRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AADTenantAddRequest from a JSON string
aad_tenant_add_request_instance = AADTenantAddRequest.from_json(json)
# print the JSON string representation of the object
print(AADTenantAddRequest.to_json())

# convert the object into a dict
aad_tenant_add_request_dict = aad_tenant_add_request_instance.to_dict()
# create an instance of AADTenantAddRequest from a dict
aad_tenant_add_request_from_dict = AADTenantAddRequest.from_dict(aad_tenant_add_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


