# GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse

Response message for ListTenants.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The token to get the next page of results. | [optional] 
**tenants** | [**List[GoogleCloudIdentitytoolkitAdminV2Tenant]**](GoogleCloudIdentitytoolkitAdminV2Tenant.md) | A list of tenants under the given agent project. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_list_tenants_response import GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse from a JSON string
google_cloud_identitytoolkit_admin_v2_list_tenants_response_instance = GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_list_tenants_response_dict = google_cloud_identitytoolkit_admin_v2_list_tenants_response_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse from a dict
google_cloud_identitytoolkit_admin_v2_list_tenants_response_from_dict = GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse.from_dict(google_cloud_identitytoolkit_admin_v2_list_tenants_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


