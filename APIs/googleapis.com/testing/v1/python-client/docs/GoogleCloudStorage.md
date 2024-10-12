# GoogleCloudStorage

A storage location within Google cloud storage (GCS).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_path** | **str** | Required. The path to a directory in GCS that will eventually contain the results for this test. The requesting user must have write access on the bucket in the supplied path. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_storage import GoogleCloudStorage

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudStorage from a JSON string
google_cloud_storage_instance = GoogleCloudStorage.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudStorage.to_json())

# convert the object into a dict
google_cloud_storage_dict = google_cloud_storage_instance.to_dict()
# create an instance of GoogleCloudStorage from a dict
google_cloud_storage_from_dict = GoogleCloudStorage.from_dict(google_cloud_storage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


