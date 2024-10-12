# GooglePrivacyDlpV2BucketingConfig

Generalization function that buckets values based on ranges. The ranges and replacement values are dynamically provided by the user for custom behavior, such as 1-30 -> LOW 31-65 -> MEDIUM 66-100 -> HIGH This can be used on data of type: number, long, string, timestamp. If the bound `Value` type differs from the type of data being transformed, we will first attempt converting the type of the data to be transformed to match the type of the bound before comparing. See https://cloud.google.com/sensitive-data-protection/docs/concepts-bucketing to learn more.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buckets** | [**List[GooglePrivacyDlpV2Bucket]**](GooglePrivacyDlpV2Bucket.md) | Set of buckets. Ranges must be non-overlapping. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_bucketing_config import GooglePrivacyDlpV2BucketingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2BucketingConfig from a JSON string
google_privacy_dlp_v2_bucketing_config_instance = GooglePrivacyDlpV2BucketingConfig.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2BucketingConfig.to_json())

# convert the object into a dict
google_privacy_dlp_v2_bucketing_config_dict = google_privacy_dlp_v2_bucketing_config_instance.to_dict()
# create an instance of GooglePrivacyDlpV2BucketingConfig from a dict
google_privacy_dlp_v2_bucketing_config_from_dict = GooglePrivacyDlpV2BucketingConfig.from_dict(google_privacy_dlp_v2_bucketing_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


