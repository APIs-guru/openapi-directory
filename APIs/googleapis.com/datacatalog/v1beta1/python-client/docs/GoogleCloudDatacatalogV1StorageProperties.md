# GoogleCloudDatacatalogV1StorageProperties

Details the properties of the underlying storage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_pattern** | **List[str]** | Patterns to identify a set of files for this fileset. Examples of a valid &#x60;file_pattern&#x60;: * &#x60;gs://bucket_name/dir/*&#x60;: matches all files in the &#x60;bucket_name/dir&#x60; directory * &#x60;gs://bucket_name/dir/**&#x60;: matches all files in the &#x60;bucket_name/dir&#x60; and all subdirectories recursively * &#x60;gs://bucket_name/file*&#x60;: matches files prefixed by &#x60;file&#x60; in &#x60;bucket_name&#x60; * &#x60;gs://bucket_name/??.txt&#x60;: matches files with two characters followed by &#x60;.txt&#x60; in &#x60;bucket_name&#x60; * &#x60;gs://bucket_name/[aeiou].txt&#x60;: matches files that contain a single vowel character followed by &#x60;.txt&#x60; in &#x60;bucket_name&#x60; * &#x60;gs://bucket_name/[a-m].txt&#x60;: matches files that contain &#x60;a&#x60;, &#x60;b&#x60;, ... or &#x60;m&#x60; followed by &#x60;.txt&#x60; in &#x60;bucket_name&#x60; * &#x60;gs://bucket_name/a/*/b&#x60;: matches all files in &#x60;bucket_name&#x60; that match the &#x60;a/*/b&#x60; pattern, such as &#x60;a/c/b&#x60;, &#x60;a/d/b&#x60; * &#x60;gs://another_bucket/a.txt&#x60;: matches &#x60;gs://another_bucket/a.txt&#x60; | [optional] 
**file_type** | **str** | File type in MIME format, for example, &#x60;text/plain&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_storage_properties import GoogleCloudDatacatalogV1StorageProperties

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1StorageProperties from a JSON string
google_cloud_datacatalog_v1_storage_properties_instance = GoogleCloudDatacatalogV1StorageProperties.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1StorageProperties.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_storage_properties_dict = google_cloud_datacatalog_v1_storage_properties_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1StorageProperties from a dict
google_cloud_datacatalog_v1_storage_properties_from_dict = GoogleCloudDatacatalogV1StorageProperties.from_dict(google_cloud_datacatalog_v1_storage_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


