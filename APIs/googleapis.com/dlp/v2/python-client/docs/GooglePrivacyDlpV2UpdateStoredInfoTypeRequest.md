# GooglePrivacyDlpV2UpdateStoredInfoTypeRequest

Request message for UpdateStoredInfoType.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**GooglePrivacyDlpV2StoredInfoTypeConfig**](GooglePrivacyDlpV2StoredInfoTypeConfig.md) |  | [optional] 
**update_mask** | **str** | Mask to control which fields get updated. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_update_stored_info_type_request import GooglePrivacyDlpV2UpdateStoredInfoTypeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2UpdateStoredInfoTypeRequest from a JSON string
google_privacy_dlp_v2_update_stored_info_type_request_instance = GooglePrivacyDlpV2UpdateStoredInfoTypeRequest.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2UpdateStoredInfoTypeRequest.to_json())

# convert the object into a dict
google_privacy_dlp_v2_update_stored_info_type_request_dict = google_privacy_dlp_v2_update_stored_info_type_request_instance.to_dict()
# create an instance of GooglePrivacyDlpV2UpdateStoredInfoTypeRequest from a dict
google_privacy_dlp_v2_update_stored_info_type_request_from_dict = GooglePrivacyDlpV2UpdateStoredInfoTypeRequest.from_dict(google_privacy_dlp_v2_update_stored_info_type_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


