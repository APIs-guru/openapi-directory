# GoogleCloudAiplatformV1SchemaTrainingjobDefinitionTftForecastingInputsGranularity

A duration of time expressed in time granularity units.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quantity** | **str** | The number of granularity_units between data points in the training data. If &#x60;granularity_unit&#x60; is &#x60;minute&#x60;, can be 1, 5, 10, 15, or 30. For all other values of &#x60;granularity_unit&#x60;, must be 1. | [optional] 
**unit** | **str** | The time granularity unit of this time period. The supported units are: * \&quot;minute\&quot; * \&quot;hour\&quot; * \&quot;day\&quot; * \&quot;week\&quot; * \&quot;month\&quot; * \&quot;year\&quot; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_trainingjob_definition_tft_forecasting_inputs_granularity import GoogleCloudAiplatformV1SchemaTrainingjobDefinitionTftForecastingInputsGranularity

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaTrainingjobDefinitionTftForecastingInputsGranularity from a JSON string
google_cloud_aiplatform_v1_schema_trainingjob_definition_tft_forecasting_inputs_granularity_instance = GoogleCloudAiplatformV1SchemaTrainingjobDefinitionTftForecastingInputsGranularity.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaTrainingjobDefinitionTftForecastingInputsGranularity.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_trainingjob_definition_tft_forecasting_inputs_granularity_dict = google_cloud_aiplatform_v1_schema_trainingjob_definition_tft_forecasting_inputs_granularity_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaTrainingjobDefinitionTftForecastingInputsGranularity from a dict
google_cloud_aiplatform_v1_schema_trainingjob_definition_tft_forecasting_inputs_granularity_from_dict = GoogleCloudAiplatformV1SchemaTrainingjobDefinitionTftForecastingInputsGranularity.from_dict(google_cloud_aiplatform_v1_schema_trainingjob_definition_tft_forecasting_inputs_granularity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


