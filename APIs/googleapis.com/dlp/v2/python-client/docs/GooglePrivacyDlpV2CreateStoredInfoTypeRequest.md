# GooglePrivacyDlpV2CreateStoredInfoTypeRequest

Request message for CreateStoredInfoType.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**GooglePrivacyDlpV2StoredInfoTypeConfig**](GooglePrivacyDlpV2StoredInfoTypeConfig.md) |  | [optional] 
**location_id** | **str** | Deprecated. This field has no effect. | [optional] 
**stored_info_type_id** | **str** | The storedInfoType ID can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: &#x60;[a-zA-Z\\d-_]+&#x60;. The maximum length is 100 characters. Can be empty to allow the system to generate one. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_create_stored_info_type_request import GooglePrivacyDlpV2CreateStoredInfoTypeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2CreateStoredInfoTypeRequest from a JSON string
google_privacy_dlp_v2_create_stored_info_type_request_instance = GooglePrivacyDlpV2CreateStoredInfoTypeRequest.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2CreateStoredInfoTypeRequest.to_json())

# convert the object into a dict
google_privacy_dlp_v2_create_stored_info_type_request_dict = google_privacy_dlp_v2_create_stored_info_type_request_instance.to_dict()
# create an instance of GooglePrivacyDlpV2CreateStoredInfoTypeRequest from a dict
google_privacy_dlp_v2_create_stored_info_type_request_from_dict = GooglePrivacyDlpV2CreateStoredInfoTypeRequest.from_dict(google_privacy_dlp_v2_create_stored_info_type_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


