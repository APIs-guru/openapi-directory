# GooglePrivacyDlpV2TableOptions

Instructions regarding the table content being inspected.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identifying_fields** | [**List[GooglePrivacyDlpV2FieldId]**](GooglePrivacyDlpV2FieldId.md) | The columns that are the primary keys for table objects included in ContentItem. A copy of this cell&#39;s value will stored alongside alongside each finding so that the finding can be traced to the specific row it came from. No more than 3 may be provided. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_table_options import GooglePrivacyDlpV2TableOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2TableOptions from a JSON string
google_privacy_dlp_v2_table_options_instance = GooglePrivacyDlpV2TableOptions.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2TableOptions.to_json())

# convert the object into a dict
google_privacy_dlp_v2_table_options_dict = google_privacy_dlp_v2_table_options_instance.to_dict()
# create an instance of GooglePrivacyDlpV2TableOptions from a dict
google_privacy_dlp_v2_table_options_from_dict = GooglePrivacyDlpV2TableOptions.from_dict(google_privacy_dlp_v2_table_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


