# GooglePrivacyDlpV2RecordKey

Message for a unique key indicating a record that contains a finding.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**big_query_key** | [**GooglePrivacyDlpV2BigQueryKey**](GooglePrivacyDlpV2BigQueryKey.md) |  | [optional] 
**datastore_key** | [**GooglePrivacyDlpV2DatastoreKey**](GooglePrivacyDlpV2DatastoreKey.md) |  | [optional] 
**id_values** | **List[str]** | Values of identifying columns in the given row. Order of values matches the order of &#x60;identifying_fields&#x60; specified in the scanning request. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_record_key import GooglePrivacyDlpV2RecordKey

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2RecordKey from a JSON string
google_privacy_dlp_v2_record_key_instance = GooglePrivacyDlpV2RecordKey.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2RecordKey.to_json())

# convert the object into a dict
google_privacy_dlp_v2_record_key_dict = google_privacy_dlp_v2_record_key_instance.to_dict()
# create an instance of GooglePrivacyDlpV2RecordKey from a dict
google_privacy_dlp_v2_record_key_from_dict = GooglePrivacyDlpV2RecordKey.from_dict(google_privacy_dlp_v2_record_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


