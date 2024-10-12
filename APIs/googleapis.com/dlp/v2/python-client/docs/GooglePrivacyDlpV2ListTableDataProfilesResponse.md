# GooglePrivacyDlpV2ListTableDataProfilesResponse

List of profiles generated for a given organization or project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The next page token. | [optional] 
**table_data_profiles** | [**List[GooglePrivacyDlpV2TableDataProfile]**](GooglePrivacyDlpV2TableDataProfile.md) | List of data profiles. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_list_table_data_profiles_response import GooglePrivacyDlpV2ListTableDataProfilesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2ListTableDataProfilesResponse from a JSON string
google_privacy_dlp_v2_list_table_data_profiles_response_instance = GooglePrivacyDlpV2ListTableDataProfilesResponse.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2ListTableDataProfilesResponse.to_json())

# convert the object into a dict
google_privacy_dlp_v2_list_table_data_profiles_response_dict = google_privacy_dlp_v2_list_table_data_profiles_response_instance.to_dict()
# create an instance of GooglePrivacyDlpV2ListTableDataProfilesResponse from a dict
google_privacy_dlp_v2_list_table_data_profiles_response_from_dict = GooglePrivacyDlpV2ListTableDataProfilesResponse.from_dict(google_privacy_dlp_v2_list_table_data_profiles_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


