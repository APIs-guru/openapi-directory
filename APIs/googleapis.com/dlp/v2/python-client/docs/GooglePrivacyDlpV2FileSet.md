# GooglePrivacyDlpV2FileSet

Set of files to scan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**regex_file_set** | [**GooglePrivacyDlpV2CloudStorageRegexFileSet**](GooglePrivacyDlpV2CloudStorageRegexFileSet.md) |  | [optional] 
**url** | **str** | The Cloud Storage url of the file(s) to scan, in the format &#x60;gs:///&#x60;. Trailing wildcard in the path is allowed. If the url ends in a trailing slash, the bucket or directory represented by the url will be scanned non-recursively (content in sub-directories will not be scanned). This means that &#x60;gs://mybucket/&#x60; is equivalent to &#x60;gs://mybucket/*&#x60;, and &#x60;gs://mybucket/directory/&#x60; is equivalent to &#x60;gs://mybucket/directory/*&#x60;. Exactly one of &#x60;url&#x60; or &#x60;regex_file_set&#x60; must be set. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_file_set import GooglePrivacyDlpV2FileSet

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2FileSet from a JSON string
google_privacy_dlp_v2_file_set_instance = GooglePrivacyDlpV2FileSet.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2FileSet.to_json())

# convert the object into a dict
google_privacy_dlp_v2_file_set_dict = google_privacy_dlp_v2_file_set_instance.to_dict()
# create an instance of GooglePrivacyDlpV2FileSet from a dict
google_privacy_dlp_v2_file_set_from_dict = GooglePrivacyDlpV2FileSet.from_dict(google_privacy_dlp_v2_file_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


