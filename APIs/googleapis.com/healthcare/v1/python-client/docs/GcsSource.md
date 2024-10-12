# GcsSource

Specifies the configuration for importing data from Cloud Storage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **str** | Points to a Cloud Storage URI containing file(s) to import. The URI must be in the following format: &#x60;gs://{bucket_id}/{object_id}&#x60;. The URI can include wildcards in &#x60;object_id&#x60; and thus identify multiple files. Supported wildcards: * &#x60;*&#x60; to match 0 or more non-separator characters * &#x60;**&#x60; to match 0 or more characters (including separators). Must be used at the end of a path and with no other wildcards in the path. Can also be used with a file extension (such as .ndjson), which imports all files with the extension in the specified directory and its sub-directories. For example, &#x60;gs://my-bucket/my-directory/**.ndjson&#x60; imports all files with &#x60;.ndjson&#x60; extensions in &#x60;my-directory/&#x60; and its sub-directories. * &#x60;?&#x60; to match 1 character Files matching the wildcard are expected to contain content only, no metadata. | [optional] 

## Example

```python
from openapi_client.models.gcs_source import GcsSource

# TODO update the JSON string below
json = "{}"
# create an instance of GcsSource from a JSON string
gcs_source_instance = GcsSource.from_json(json)
# print the JSON string representation of the object
print(GcsSource.to_json())

# convert the object into a dict
gcs_source_dict = gcs_source_instance.to_dict()
# create an instance of GcsSource from a dict
gcs_source_from_dict = GcsSource.from_dict(gcs_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


