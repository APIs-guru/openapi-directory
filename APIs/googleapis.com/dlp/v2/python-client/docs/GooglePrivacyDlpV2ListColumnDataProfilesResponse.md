# GooglePrivacyDlpV2ListColumnDataProfilesResponse

List of profiles generated for a given organization or project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_data_profiles** | [**List[GooglePrivacyDlpV2ColumnDataProfile]**](GooglePrivacyDlpV2ColumnDataProfile.md) | List of data profiles. | [optional] 
**next_page_token** | **str** | The next page token. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_list_column_data_profiles_response import GooglePrivacyDlpV2ListColumnDataProfilesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2ListColumnDataProfilesResponse from a JSON string
google_privacy_dlp_v2_list_column_data_profiles_response_instance = GooglePrivacyDlpV2ListColumnDataProfilesResponse.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2ListColumnDataProfilesResponse.to_json())

# convert the object into a dict
google_privacy_dlp_v2_list_column_data_profiles_response_dict = google_privacy_dlp_v2_list_column_data_profiles_response_instance.to_dict()
# create an instance of GooglePrivacyDlpV2ListColumnDataProfilesResponse from a dict
google_privacy_dlp_v2_list_column_data_profiles_response_from_dict = GooglePrivacyDlpV2ListColumnDataProfilesResponse.from_dict(google_privacy_dlp_v2_list_column_data_profiles_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


