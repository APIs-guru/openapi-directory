# GooglePrivacyDlpV2ListInfoTypesResponse

Response to the ListInfoTypes request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**info_types** | [**List[GooglePrivacyDlpV2InfoTypeDescription]**](GooglePrivacyDlpV2InfoTypeDescription.md) | Set of sensitive infoTypes. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_list_info_types_response import GooglePrivacyDlpV2ListInfoTypesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2ListInfoTypesResponse from a JSON string
google_privacy_dlp_v2_list_info_types_response_instance = GooglePrivacyDlpV2ListInfoTypesResponse.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2ListInfoTypesResponse.to_json())

# convert the object into a dict
google_privacy_dlp_v2_list_info_types_response_dict = google_privacy_dlp_v2_list_info_types_response_instance.to_dict()
# create an instance of GooglePrivacyDlpV2ListInfoTypesResponse from a dict
google_privacy_dlp_v2_list_info_types_response_from_dict = GooglePrivacyDlpV2ListInfoTypesResponse.from_dict(google_privacy_dlp_v2_list_info_types_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


