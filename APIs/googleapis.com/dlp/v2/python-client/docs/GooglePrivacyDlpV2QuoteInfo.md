# GooglePrivacyDlpV2QuoteInfo

Message for infoType-dependent details parsed from quote.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_time** | [**GooglePrivacyDlpV2DateTime**](GooglePrivacyDlpV2DateTime.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_quote_info import GooglePrivacyDlpV2QuoteInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2QuoteInfo from a JSON string
google_privacy_dlp_v2_quote_info_instance = GooglePrivacyDlpV2QuoteInfo.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2QuoteInfo.to_json())

# convert the object into a dict
google_privacy_dlp_v2_quote_info_dict = google_privacy_dlp_v2_quote_info_instance.to_dict()
# create an instance of GooglePrivacyDlpV2QuoteInfo from a dict
google_privacy_dlp_v2_quote_info_from_dict = GooglePrivacyDlpV2QuoteInfo.from_dict(google_privacy_dlp_v2_quote_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


