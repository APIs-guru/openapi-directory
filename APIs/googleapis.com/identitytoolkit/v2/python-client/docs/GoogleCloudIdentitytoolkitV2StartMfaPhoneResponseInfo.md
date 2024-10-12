# GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo

Phone Verification info for a StartMfa response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**session_info** | **str** | An opaque string that represents the enrollment session. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_v2_start_mfa_phone_response_info import GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo from a JSON string
google_cloud_identitytoolkit_v2_start_mfa_phone_response_info_instance = GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_v2_start_mfa_phone_response_info_dict = google_cloud_identitytoolkit_v2_start_mfa_phone_response_info_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo from a dict
google_cloud_identitytoolkit_v2_start_mfa_phone_response_info_from_dict = GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo.from_dict(google_cloud_identitytoolkit_v2_start_mfa_phone_response_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


