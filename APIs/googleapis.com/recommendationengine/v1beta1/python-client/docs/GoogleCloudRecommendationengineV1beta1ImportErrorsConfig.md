# GoogleCloudRecommendationengineV1beta1ImportErrorsConfig

Configuration of destination for Import related errors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_prefix** | **str** | Google Cloud Storage path for import errors. This must be an empty, existing Cloud Storage bucket. Import errors will be written to a file in this bucket, one per line, as a JSON-encoded &#x60;google.rpc.Status&#x60; message. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1beta1_import_errors_config import GoogleCloudRecommendationengineV1beta1ImportErrorsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1beta1ImportErrorsConfig from a JSON string
google_cloud_recommendationengine_v1beta1_import_errors_config_instance = GoogleCloudRecommendationengineV1beta1ImportErrorsConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1beta1ImportErrorsConfig.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1beta1_import_errors_config_dict = google_cloud_recommendationengine_v1beta1_import_errors_config_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1beta1ImportErrorsConfig from a dict
google_cloud_recommendationengine_v1beta1_import_errors_config_from_dict = GoogleCloudRecommendationengineV1beta1ImportErrorsConfig.from_dict(google_cloud_recommendationengine_v1beta1_import_errors_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


