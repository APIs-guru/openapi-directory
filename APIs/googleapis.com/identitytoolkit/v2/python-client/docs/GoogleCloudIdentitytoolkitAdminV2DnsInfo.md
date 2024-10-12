# GoogleCloudIdentitytoolkitAdminV2DnsInfo

Information of custom domain DNS verification. By default, default_domain will be used. A custom domain can be configured using VerifyCustomDomain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_domain** | **str** | Output only. The applied verified custom domain. | [optional] [readonly] 
**custom_domain_state** | **str** | Output only. The current verification state of the custom domain. The custom domain will only be used once the domain verification is successful. | [optional] [readonly] 
**domain_verification_request_time** | **str** | Output only. The timestamp of initial request for the current domain verification. | [optional] [readonly] 
**pending_custom_domain** | **str** | Output only. The custom domain that&#39;s to be verified. | [optional] [readonly] 
**use_custom_domain** | **bool** | Whether to use custom domain. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_dns_info import GoogleCloudIdentitytoolkitAdminV2DnsInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2DnsInfo from a JSON string
google_cloud_identitytoolkit_admin_v2_dns_info_instance = GoogleCloudIdentitytoolkitAdminV2DnsInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2DnsInfo.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_dns_info_dict = google_cloud_identitytoolkit_admin_v2_dns_info_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2DnsInfo from a dict
google_cloud_identitytoolkit_admin_v2_dns_info_from_dict = GoogleCloudIdentitytoolkitAdminV2DnsInfo.from_dict(google_cloud_identitytoolkit_admin_v2_dns_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


