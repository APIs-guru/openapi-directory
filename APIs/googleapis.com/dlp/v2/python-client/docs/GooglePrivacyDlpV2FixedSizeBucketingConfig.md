# GooglePrivacyDlpV2FixedSizeBucketingConfig

Buckets values based on fixed size ranges. The Bucketing transformation can provide all of this functionality, but requires more configuration. This message is provided as a convenience to the user for simple bucketing strategies. The transformed value will be a hyphenated string of {lower_bound}-{upper_bound}. For example, if lower_bound = 10 and upper_bound = 20, all values that are within this bucket will be replaced with \"10-20\". This can be used on data of type: double, long. If the bound Value type differs from the type of data being transformed, we will first attempt converting the type of the data to be transformed to match the type of the bound before comparing. See https://cloud.google.com/sensitive-data-protection/docs/concepts-bucketing to learn more.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket_size** | **float** | Required. Size of each bucket (except for minimum and maximum buckets). So if &#x60;lower_bound&#x60; &#x3D; 10, &#x60;upper_bound&#x60; &#x3D; 89, and &#x60;bucket_size&#x60; &#x3D; 10, then the following buckets would be used: -10, 10-20, 20-30, 30-40, 40-50, 50-60, 60-70, 70-80, 80-89, 89+. Precision up to 2 decimals works. | [optional] 
**lower_bound** | [**GooglePrivacyDlpV2Value**](GooglePrivacyDlpV2Value.md) |  | [optional] 
**upper_bound** | [**GooglePrivacyDlpV2Value**](GooglePrivacyDlpV2Value.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_fixed_size_bucketing_config import GooglePrivacyDlpV2FixedSizeBucketingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2FixedSizeBucketingConfig from a JSON string
google_privacy_dlp_v2_fixed_size_bucketing_config_instance = GooglePrivacyDlpV2FixedSizeBucketingConfig.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2FixedSizeBucketingConfig.to_json())

# convert the object into a dict
google_privacy_dlp_v2_fixed_size_bucketing_config_dict = google_privacy_dlp_v2_fixed_size_bucketing_config_instance.to_dict()
# create an instance of GooglePrivacyDlpV2FixedSizeBucketingConfig from a dict
google_privacy_dlp_v2_fixed_size_bucketing_config_from_dict = GooglePrivacyDlpV2FixedSizeBucketingConfig.from_dict(google_privacy_dlp_v2_fixed_size_bucketing_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


