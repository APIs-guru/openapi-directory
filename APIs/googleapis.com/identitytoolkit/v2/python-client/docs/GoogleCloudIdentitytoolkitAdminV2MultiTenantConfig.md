# GoogleCloudIdentitytoolkitAdminV2MultiTenantConfig

Configuration related to multi-tenant functionality.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_tenants** | **bool** | Whether this project can have tenants or not. | [optional] 
**default_tenant_location** | **str** | The default cloud parent org or folder that the tenant project should be created under. The parent resource name should be in the format of \&quot;/\&quot;, such as \&quot;folders/123\&quot; or \&quot;organizations/456\&quot;. If the value is not set, the tenant will be created under the same organization or folder as the agent project. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_multi_tenant_config import GoogleCloudIdentitytoolkitAdminV2MultiTenantConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2MultiTenantConfig from a JSON string
google_cloud_identitytoolkit_admin_v2_multi_tenant_config_instance = GoogleCloudIdentitytoolkitAdminV2MultiTenantConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2MultiTenantConfig.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_multi_tenant_config_dict = google_cloud_identitytoolkit_admin_v2_multi_tenant_config_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2MultiTenantConfig from a dict
google_cloud_identitytoolkit_admin_v2_multi_tenant_config_from_dict = GoogleCloudIdentitytoolkitAdminV2MultiTenantConfig.from_dict(google_cloud_identitytoolkit_admin_v2_multi_tenant_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


