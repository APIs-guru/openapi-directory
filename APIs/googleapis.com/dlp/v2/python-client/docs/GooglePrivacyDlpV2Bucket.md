# GooglePrivacyDlpV2Bucket

Bucket is represented as a range, along with replacement values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max** | [**GooglePrivacyDlpV2Value**](GooglePrivacyDlpV2Value.md) |  | [optional] 
**min** | [**GooglePrivacyDlpV2Value**](GooglePrivacyDlpV2Value.md) |  | [optional] 
**replacement_value** | [**GooglePrivacyDlpV2Value**](GooglePrivacyDlpV2Value.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_bucket import GooglePrivacyDlpV2Bucket

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2Bucket from a JSON string
google_privacy_dlp_v2_bucket_instance = GooglePrivacyDlpV2Bucket.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2Bucket.to_json())

# convert the object into a dict
google_privacy_dlp_v2_bucket_dict = google_privacy_dlp_v2_bucket_instance.to_dict()
# create an instance of GooglePrivacyDlpV2Bucket from a dict
google_privacy_dlp_v2_bucket_from_dict = GooglePrivacyDlpV2Bucket.from_dict(google_privacy_dlp_v2_bucket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


