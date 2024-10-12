# GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse

Response for ListDefaultSupportedIdps

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_supported_idps** | [**List[GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp]**](GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp.md) | The set of configs. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_list_default_supported_idps_response import GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse from a JSON string
google_cloud_identitytoolkit_admin_v2_list_default_supported_idps_response_instance = GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_list_default_supported_idps_response_dict = google_cloud_identitytoolkit_admin_v2_list_default_supported_idps_response_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse from a dict
google_cloud_identitytoolkit_admin_v2_list_default_supported_idps_response_from_dict = GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse.from_dict(google_cloud_identitytoolkit_admin_v2_list_default_supported_idps_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


