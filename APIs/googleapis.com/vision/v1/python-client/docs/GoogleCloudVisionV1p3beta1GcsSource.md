# GoogleCloudVisionV1p3beta1GcsSource

The Google Cloud Storage location where the input will be read from.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **str** | Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p3beta1_gcs_source import GoogleCloudVisionV1p3beta1GcsSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p3beta1GcsSource from a JSON string
google_cloud_vision_v1p3beta1_gcs_source_instance = GoogleCloudVisionV1p3beta1GcsSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p3beta1GcsSource.to_json())

# convert the object into a dict
google_cloud_vision_v1p3beta1_gcs_source_dict = google_cloud_vision_v1p3beta1_gcs_source_instance.to_dict()
# create an instance of GoogleCloudVisionV1p3beta1GcsSource from a dict
google_cloud_vision_v1p3beta1_gcs_source_from_dict = GoogleCloudVisionV1p3beta1GcsSource.from_dict(google_cloud_vision_v1p3beta1_gcs_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


