# GooglePrivacyDlpV2CloudStorageOptions

Options defining a file or a set of files within a Cloud Storage bucket.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bytes_limit_per_file** | **str** | Max number of bytes to scan from a file. If a scanned file&#39;s size is bigger than this value then the rest of the bytes are omitted. Only one of &#x60;bytes_limit_per_file&#x60; and &#x60;bytes_limit_per_file_percent&#x60; can be specified. This field can&#39;t be set if de-identification is requested. For certain file types, setting this field has no effect. For more information, see [Limits on bytes scanned per file](https://cloud.google.com/sensitive-data-protection/docs/supported-file-types#max-byte-size-per-file). | [optional] 
**bytes_limit_per_file_percent** | **int** | Max percentage of bytes to scan from a file. The rest are omitted. The number of bytes scanned is rounded down. Must be between 0 and 100, inclusively. Both 0 and 100 means no limit. Defaults to 0. Only one of bytes_limit_per_file and bytes_limit_per_file_percent can be specified. This field can&#39;t be set if de-identification is requested. For certain file types, setting this field has no effect. For more information, see [Limits on bytes scanned per file](https://cloud.google.com/sensitive-data-protection/docs/supported-file-types#max-byte-size-per-file). | [optional] 
**file_set** | [**GooglePrivacyDlpV2FileSet**](GooglePrivacyDlpV2FileSet.md) |  | [optional] 
**file_types** | **List[str]** | List of file type groups to include in the scan. If empty, all files are scanned and available data format processors are applied. In addition, the binary content of the selected files is always scanned as well. Images are scanned only as binary if the specified region does not support image inspection and no file_types were specified. Image inspection is restricted to &#39;global&#39;, &#39;us&#39;, &#39;asia&#39;, and &#39;europe&#39;. | [optional] 
**files_limit_percent** | **int** | Limits the number of files to scan to this percentage of the input FileSet. Number of files scanned is rounded down. Must be between 0 and 100, inclusively. Both 0 and 100 means no limit. Defaults to 0. | [optional] 
**sample_method** | **str** | How to sample the data. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_cloud_storage_options import GooglePrivacyDlpV2CloudStorageOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2CloudStorageOptions from a JSON string
google_privacy_dlp_v2_cloud_storage_options_instance = GooglePrivacyDlpV2CloudStorageOptions.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2CloudStorageOptions.to_json())

# convert the object into a dict
google_privacy_dlp_v2_cloud_storage_options_dict = google_privacy_dlp_v2_cloud_storage_options_instance.to_dict()
# create an instance of GooglePrivacyDlpV2CloudStorageOptions from a dict
google_privacy_dlp_v2_cloud_storage_options_from_dict = GooglePrivacyDlpV2CloudStorageOptions.from_dict(google_privacy_dlp_v2_cloud_storage_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


