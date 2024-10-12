# GooglePrivacyDlpV2ListStoredInfoTypesResponse

Response message for ListStoredInfoTypes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | If the next page is available then the next page token to be used in the following ListStoredInfoTypes request. | [optional] 
**stored_info_types** | [**List[GooglePrivacyDlpV2StoredInfoType]**](GooglePrivacyDlpV2StoredInfoType.md) | List of storedInfoTypes, up to page_size in ListStoredInfoTypesRequest. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_list_stored_info_types_response import GooglePrivacyDlpV2ListStoredInfoTypesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2ListStoredInfoTypesResponse from a JSON string
google_privacy_dlp_v2_list_stored_info_types_response_instance = GooglePrivacyDlpV2ListStoredInfoTypesResponse.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2ListStoredInfoTypesResponse.to_json())

# convert the object into a dict
google_privacy_dlp_v2_list_stored_info_types_response_dict = google_privacy_dlp_v2_list_stored_info_types_response_instance.to_dict()
# create an instance of GooglePrivacyDlpV2ListStoredInfoTypesResponse from a dict
google_privacy_dlp_v2_list_stored_info_types_response_from_dict = GooglePrivacyDlpV2ListStoredInfoTypesResponse.from_dict(google_privacy_dlp_v2_list_stored_info_types_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


