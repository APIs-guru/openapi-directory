# GooglePrivacyDlpV2LargeCustomDictionaryConfig

Configuration for a custom dictionary created from a data source of any size up to the maximum size defined in the [limits](https://cloud.google.com/sensitive-data-protection/limits) page. The artifacts of dictionary creation are stored in the specified Cloud Storage location. Consider using `CustomInfoType.Dictionary` for smaller dictionaries that satisfy the size requirements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**big_query_field** | [**GooglePrivacyDlpV2BigQueryField**](GooglePrivacyDlpV2BigQueryField.md) |  | [optional] 
**cloud_storage_file_set** | [**GooglePrivacyDlpV2CloudStorageFileSet**](GooglePrivacyDlpV2CloudStorageFileSet.md) |  | [optional] 
**output_path** | [**GooglePrivacyDlpV2CloudStoragePath**](GooglePrivacyDlpV2CloudStoragePath.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_large_custom_dictionary_config import GooglePrivacyDlpV2LargeCustomDictionaryConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2LargeCustomDictionaryConfig from a JSON string
google_privacy_dlp_v2_large_custom_dictionary_config_instance = GooglePrivacyDlpV2LargeCustomDictionaryConfig.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2LargeCustomDictionaryConfig.to_json())

# convert the object into a dict
google_privacy_dlp_v2_large_custom_dictionary_config_dict = google_privacy_dlp_v2_large_custom_dictionary_config_instance.to_dict()
# create an instance of GooglePrivacyDlpV2LargeCustomDictionaryConfig from a dict
google_privacy_dlp_v2_large_custom_dictionary_config_from_dict = GooglePrivacyDlpV2LargeCustomDictionaryConfig.from_dict(google_privacy_dlp_v2_large_custom_dictionary_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


