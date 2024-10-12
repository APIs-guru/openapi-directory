# GooglePrivacyDlpV2Table

Structured content to inspect. Up to 50,000 `Value`s per request allowed. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-structured-text#inspecting_a_table to learn more.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**headers** | [**List[GooglePrivacyDlpV2FieldId]**](GooglePrivacyDlpV2FieldId.md) | Headers of the table. | [optional] 
**rows** | [**List[GooglePrivacyDlpV2Row]**](GooglePrivacyDlpV2Row.md) | Rows of the table. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_table import GooglePrivacyDlpV2Table

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2Table from a JSON string
google_privacy_dlp_v2_table_instance = GooglePrivacyDlpV2Table.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2Table.to_json())

# convert the object into a dict
google_privacy_dlp_v2_table_dict = google_privacy_dlp_v2_table_instance.to_dict()
# create an instance of GooglePrivacyDlpV2Table from a dict
google_privacy_dlp_v2_table_from_dict = GooglePrivacyDlpV2Table.from_dict(google_privacy_dlp_v2_table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


