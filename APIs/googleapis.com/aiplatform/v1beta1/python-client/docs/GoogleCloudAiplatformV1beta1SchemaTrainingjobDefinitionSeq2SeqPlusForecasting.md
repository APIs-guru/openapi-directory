# GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionSeq2SeqPlusForecasting

A TrainingJob that trains and uploads an AutoML Forecasting Model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inputs** | [**GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionSeq2SeqPlusForecastingInputs**](GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionSeq2SeqPlusForecastingInputs.md) |  | [optional] 
**metadata** | [**GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionSeq2SeqPlusForecastingMetadata**](GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionSeq2SeqPlusForecastingMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_seq2_seq_plus_forecasting import GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionSeq2SeqPlusForecasting

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionSeq2SeqPlusForecasting from a JSON string
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_seq2_seq_plus_forecasting_instance = GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionSeq2SeqPlusForecasting.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionSeq2SeqPlusForecasting.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_seq2_seq_plus_forecasting_dict = google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_seq2_seq_plus_forecasting_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionSeq2SeqPlusForecasting from a dict
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_seq2_seq_plus_forecasting_from_dict = GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionSeq2SeqPlusForecasting.from_dict(google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_seq2_seq_plus_forecasting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


