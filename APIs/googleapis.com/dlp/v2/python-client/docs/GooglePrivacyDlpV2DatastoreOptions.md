# GooglePrivacyDlpV2DatastoreOptions

Options defining a data set within Google Cloud Datastore.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | [**GooglePrivacyDlpV2KindExpression**](GooglePrivacyDlpV2KindExpression.md) |  | [optional] 
**partition_id** | [**GooglePrivacyDlpV2PartitionId**](GooglePrivacyDlpV2PartitionId.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_datastore_options import GooglePrivacyDlpV2DatastoreOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2DatastoreOptions from a JSON string
google_privacy_dlp_v2_datastore_options_instance = GooglePrivacyDlpV2DatastoreOptions.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2DatastoreOptions.to_json())

# convert the object into a dict
google_privacy_dlp_v2_datastore_options_dict = google_privacy_dlp_v2_datastore_options_instance.to_dict()
# create an instance of GooglePrivacyDlpV2DatastoreOptions from a dict
google_privacy_dlp_v2_datastore_options_from_dict = GooglePrivacyDlpV2DatastoreOptions.from_dict(google_privacy_dlp_v2_datastore_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


