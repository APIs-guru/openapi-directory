# AADTenantResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aad_tenant_id** | **str** | The AAD tenant id | 
**display_name** | **str** | The name of the AAD Tenant | 

## Example

```python
from openapi_client.models.aad_tenant_response import AADTenantResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AADTenantResponse from a JSON string
aad_tenant_response_instance = AADTenantResponse.from_json(json)
# print the JSON string representation of the object
print(AADTenantResponse.to_json())

# convert the object into a dict
aad_tenant_response_dict = aad_tenant_response_instance.to_dict()
# create an instance of AADTenantResponse from a dict
aad_tenant_response_from_dict = AADTenantResponse.from_dict(aad_tenant_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


