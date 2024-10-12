# GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse

Response for DefaultSupportedIdpConfigs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_supported_idp_configs** | [**List[GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig]**](GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig.md) | The set of configs. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_list_default_supported_idp_configs_response import GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse from a JSON string
google_cloud_identitytoolkit_admin_v2_list_default_supported_idp_configs_response_instance = GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_list_default_supported_idp_configs_response_dict = google_cloud_identitytoolkit_admin_v2_list_default_supported_idp_configs_response_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse from a dict
google_cloud_identitytoolkit_admin_v2_list_default_supported_idp_configs_response_from_dict = GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse.from_dict(google_cloud_identitytoolkit_admin_v2_list_default_supported_idp_configs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


