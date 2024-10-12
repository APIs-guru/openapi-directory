# GoogleCloudVisionV1p1beta1ImageSource

External image source (Google Cloud Storage or web URL image location).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_image_uri** | **str** | **Use &#x60;image_uri&#x60; instead.** The Google Cloud Storage URI of the form &#x60;gs://bucket_name/object_name&#x60;. Object versioning is not supported. See [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris) for more info. | [optional] 
**image_uri** | **str** | The URI of the source image. Can be either: 1. A Google Cloud Storage URI of the form &#x60;gs://bucket_name/object_name&#x60;. Object versioning is not supported. See [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris) for more info. 2. A publicly-accessible image HTTP/HTTPS URL. When fetching images from HTTP/HTTPS URLs, Google cannot guarantee that the request will be completed. Your request may fail if the specified host denies the request (e.g. due to request throttling or DOS prevention), or if Google throttles requests to the site for abuse prevention. You should not depend on externally-hosted images for production applications. When both &#x60;gcs_image_uri&#x60; and &#x60;image_uri&#x60; are specified, &#x60;image_uri&#x60; takes precedence. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p1beta1_image_source import GoogleCloudVisionV1p1beta1ImageSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p1beta1ImageSource from a JSON string
google_cloud_vision_v1p1beta1_image_source_instance = GoogleCloudVisionV1p1beta1ImageSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p1beta1ImageSource.to_json())

# convert the object into a dict
google_cloud_vision_v1p1beta1_image_source_dict = google_cloud_vision_v1p1beta1_image_source_instance.to_dict()
# create an instance of GoogleCloudVisionV1p1beta1ImageSource from a dict
google_cloud_vision_v1p1beta1_image_source_from_dict = GoogleCloudVisionV1p1beta1ImageSource.from_dict(google_cloud_vision_v1p1beta1_image_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


