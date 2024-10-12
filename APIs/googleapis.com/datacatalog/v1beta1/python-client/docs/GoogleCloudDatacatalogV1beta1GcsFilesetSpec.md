# GoogleCloudDatacatalogV1beta1GcsFilesetSpec

Describes a Cloud Storage fileset entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_patterns** | **List[str]** | Required. Patterns to identify a set of files in Google Cloud Storage. See [Cloud Storage documentation](https://cloud.google.com/storage/docs/gsutil/addlhelp/WildcardNames) for more information. Note that bucket wildcards are currently not supported. Examples of valid file_patterns: * &#x60;gs://bucket_name/dir/*&#x60;: matches all files within &#x60;bucket_name/dir&#x60; directory. * &#x60;gs://bucket_name/dir/**&#x60;: matches all files in &#x60;bucket_name/dir&#x60; spanning all subdirectories. * &#x60;gs://bucket_name/file*&#x60;: matches files prefixed by &#x60;file&#x60; in &#x60;bucket_name&#x60; * &#x60;gs://bucket_name/??.txt&#x60;: matches files with two characters followed by &#x60;.txt&#x60; in &#x60;bucket_name&#x60; * &#x60;gs://bucket_name/[aeiou].txt&#x60;: matches files that contain a single vowel character followed by &#x60;.txt&#x60; in &#x60;bucket_name&#x60; * &#x60;gs://bucket_name/[a-m].txt&#x60;: matches files that contain &#x60;a&#x60;, &#x60;b&#x60;, ... or &#x60;m&#x60; followed by &#x60;.txt&#x60; in &#x60;bucket_name&#x60; * &#x60;gs://bucket_name/a/*/b&#x60;: matches all files in &#x60;bucket_name&#x60; that match &#x60;a/*/b&#x60; pattern, such as &#x60;a/c/b&#x60;, &#x60;a/d/b&#x60; * &#x60;gs://another_bucket/a.txt&#x60;: matches &#x60;gs://another_bucket/a.txt&#x60; You can combine wildcards to provide more powerful matches, for example: * &#x60;gs://bucket_name/[a-m]??.j*g&#x60; | [optional] 
**sample_gcs_file_specs** | [**List[GoogleCloudDatacatalogV1beta1GcsFileSpec]**](GoogleCloudDatacatalogV1beta1GcsFileSpec.md) | Output only. Sample files contained in this fileset, not all files contained in this fileset are represented here. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1beta1_gcs_fileset_spec import GoogleCloudDatacatalogV1beta1GcsFilesetSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1beta1GcsFilesetSpec from a JSON string
google_cloud_datacatalog_v1beta1_gcs_fileset_spec_instance = GoogleCloudDatacatalogV1beta1GcsFilesetSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1beta1GcsFilesetSpec.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1beta1_gcs_fileset_spec_dict = google_cloud_datacatalog_v1beta1_gcs_fileset_spec_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1beta1GcsFilesetSpec from a dict
google_cloud_datacatalog_v1beta1_gcs_fileset_spec_from_dict = GoogleCloudDatacatalogV1beta1GcsFilesetSpec.from_dict(google_cloud_datacatalog_v1beta1_gcs_fileset_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


