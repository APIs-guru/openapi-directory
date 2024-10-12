# GooglePrivacyDlpV2CloudStorageRegexFileSet

Message representing a set of files in a Cloud Storage bucket. Regular expressions are used to allow fine-grained control over which files in the bucket to include. Included files are those that match at least one item in `include_regex` and do not match any items in `exclude_regex`. Note that a file that matches items from both lists will _not_ be included. For a match to occur, the entire file path (i.e., everything in the url after the bucket name) must match the regular expression. For example, given the input `{bucket_name: \"mybucket\", include_regex: [\"directory1/.*\"], exclude_regex: [\"directory1/excluded.*\"]}`: * `gs://mybucket/directory1/myfile` will be included * `gs://mybucket/directory1/directory2/myfile` will be included (`.*` matches across `/`) * `gs://mybucket/directory0/directory1/myfile` will _not_ be included (the full path doesn't match any items in `include_regex`) * `gs://mybucket/directory1/excludedfile` will _not_ be included (the path matches an item in `exclude_regex`) If `include_regex` is left empty, it will match all files by default (this is equivalent to setting `include_regex: [\".*\"]`). Some other common use cases: * `{bucket_name: \"mybucket\", exclude_regex: [\".*\\.pdf\"]}` will include all files in `mybucket` except for .pdf files * `{bucket_name: \"mybucket\", include_regex: [\"directory/[^/]+\"]}` will include all files directly under `gs://mybucket/directory/`, without matching across `/`

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket_name** | **str** | The name of a Cloud Storage bucket. Required. | [optional] 
**exclude_regex** | **List[str]** | A list of regular expressions matching file paths to exclude. All files in the bucket that match at least one of these regular expressions will be excluded from the scan. Regular expressions use RE2 [syntax](https://github.com/google/re2/wiki/Syntax); a guide can be found under the google/re2 repository on GitHub. | [optional] 
**include_regex** | **List[str]** | A list of regular expressions matching file paths to include. All files in the bucket that match at least one of these regular expressions will be included in the set of files, except for those that also match an item in &#x60;exclude_regex&#x60;. Leaving this field empty will match all files by default (this is equivalent to including &#x60;.*&#x60; in the list). Regular expressions use RE2 [syntax](https://github.com/google/re2/wiki/Syntax); a guide can be found under the google/re2 repository on GitHub. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_cloud_storage_regex_file_set import GooglePrivacyDlpV2CloudStorageRegexFileSet

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2CloudStorageRegexFileSet from a JSON string
google_privacy_dlp_v2_cloud_storage_regex_file_set_instance = GooglePrivacyDlpV2CloudStorageRegexFileSet.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2CloudStorageRegexFileSet.to_json())

# convert the object into a dict
google_privacy_dlp_v2_cloud_storage_regex_file_set_dict = google_privacy_dlp_v2_cloud_storage_regex_file_set_instance.to_dict()
# create an instance of GooglePrivacyDlpV2CloudStorageRegexFileSet from a dict
google_privacy_dlp_v2_cloud_storage_regex_file_set_from_dict = GooglePrivacyDlpV2CloudStorageRegexFileSet.from_dict(google_privacy_dlp_v2_cloud_storage_regex_file_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


