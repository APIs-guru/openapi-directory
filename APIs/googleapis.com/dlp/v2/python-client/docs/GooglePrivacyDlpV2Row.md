# GooglePrivacyDlpV2Row

Values of the row.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | [**List[GooglePrivacyDlpV2Value]**](GooglePrivacyDlpV2Value.md) | Individual cells. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_row import GooglePrivacyDlpV2Row

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2Row from a JSON string
google_privacy_dlp_v2_row_instance = GooglePrivacyDlpV2Row.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2Row.to_json())

# convert the object into a dict
google_privacy_dlp_v2_row_dict = google_privacy_dlp_v2_row_instance.to_dict()
# create an instance of GooglePrivacyDlpV2Row from a dict
google_privacy_dlp_v2_row_from_dict = GooglePrivacyDlpV2Row.from_dict(google_privacy_dlp_v2_row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


