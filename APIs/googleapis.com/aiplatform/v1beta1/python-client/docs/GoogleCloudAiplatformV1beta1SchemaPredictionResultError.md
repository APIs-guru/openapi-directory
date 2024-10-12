# GoogleCloudAiplatformV1beta1SchemaPredictionResultError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Error message with additional details. | [optional] 
**status** | **str** | Error status. This will be serialized into the enum name e.g. \&quot;NOT_FOUND\&quot;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_prediction_result_error import GoogleCloudAiplatformV1beta1SchemaPredictionResultError

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaPredictionResultError from a JSON string
google_cloud_aiplatform_v1beta1_schema_prediction_result_error_instance = GoogleCloudAiplatformV1beta1SchemaPredictionResultError.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaPredictionResultError.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_prediction_result_error_dict = google_cloud_aiplatform_v1beta1_schema_prediction_result_error_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaPredictionResultError from a dict
google_cloud_aiplatform_v1beta1_schema_prediction_result_error_from_dict = GoogleCloudAiplatformV1beta1SchemaPredictionResultError.from_dict(google_cloud_aiplatform_v1beta1_schema_prediction_result_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


