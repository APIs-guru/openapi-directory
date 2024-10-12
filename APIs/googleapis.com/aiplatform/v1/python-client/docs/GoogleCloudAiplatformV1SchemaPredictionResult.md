# GoogleCloudAiplatformV1SchemaPredictionResult

Represents a line of JSONL in the batch prediction output file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**GoogleCloudAiplatformV1SchemaPredictionResultError**](GoogleCloudAiplatformV1SchemaPredictionResultError.md) |  | [optional] 
**instance** | **Dict[str, object]** | User&#39;s input instance. Struct is used here instead of Any so that JsonFormat does not append an extra \&quot;@type\&quot; field when we convert the proto to JSON. | [optional] 
**key** | **str** | Optional user-provided key from the input instance. | [optional] 
**prediction** | **object** | The prediction result. Value is used here instead of Any so that JsonFormat does not append an extra \&quot;@type\&quot; field when we convert the proto to JSON and so we can represent array of objects. Do not set error if this is set. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_prediction_result import GoogleCloudAiplatformV1SchemaPredictionResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaPredictionResult from a JSON string
google_cloud_aiplatform_v1_schema_prediction_result_instance = GoogleCloudAiplatformV1SchemaPredictionResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaPredictionResult.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_prediction_result_dict = google_cloud_aiplatform_v1_schema_prediction_result_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaPredictionResult from a dict
google_cloud_aiplatform_v1_schema_prediction_result_from_dict = GoogleCloudAiplatformV1SchemaPredictionResult.from_dict(google_cloud_aiplatform_v1_schema_prediction_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


