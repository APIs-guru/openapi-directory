# GoogleCloudAiplatformV1SchemaTrainingjobDefinitionSeq2SeqPlusForecastingInputsTransformationTimestampTransformation

Training pipeline will perform following transformation functions. * Apply the transformation functions for Numerical columns. * Determine the year, month, day,and weekday. Treat each value from the timestamp as a Categorical column. * Invalid numerical values (for example, values that fall outside of a typical timestamp range, or are extreme values) receive no special treatment and are not removed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_name** | **str** |  | [optional] 
**time_format** | **str** | The format in which that time field is expressed. The time_format must either be one of: * &#x60;unix-seconds&#x60; * &#x60;unix-milliseconds&#x60; * &#x60;unix-microseconds&#x60; * &#x60;unix-nanoseconds&#x60; (for respectively number of seconds, milliseconds, microseconds and nanoseconds since start of the Unix epoch); or be written in &#x60;strftime&#x60; syntax. If time_format is not set, then the default format is RFC 3339 &#x60;date-time&#x60; format, where &#x60;time-offset&#x60; &#x3D; &#x60;\&quot;Z\&quot;&#x60; (e.g. 1985-04-12T23:20:50.52Z) | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_trainingjob_definition_seq2_seq_plus_forecasting_inputs_transformation_timestamp_transformation import GoogleCloudAiplatformV1SchemaTrainingjobDefinitionSeq2SeqPlusForecastingInputsTransformationTimestampTransformation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaTrainingjobDefinitionSeq2SeqPlusForecastingInputsTransformationTimestampTransformation from a JSON string
google_cloud_aiplatform_v1_schema_trainingjob_definition_seq2_seq_plus_forecasting_inputs_transformation_timestamp_transformation_instance = GoogleCloudAiplatformV1SchemaTrainingjobDefinitionSeq2SeqPlusForecastingInputsTransformationTimestampTransformation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaTrainingjobDefinitionSeq2SeqPlusForecastingInputsTransformationTimestampTransformation.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_trainingjob_definition_seq2_seq_plus_forecasting_inputs_transformation_timestamp_transformation_dict = google_cloud_aiplatform_v1_schema_trainingjob_definition_seq2_seq_plus_forecasting_inputs_transformation_timestamp_transformation_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaTrainingjobDefinitionSeq2SeqPlusForecastingInputsTransformationTimestampTransformation from a dict
google_cloud_aiplatform_v1_schema_trainingjob_definition_seq2_seq_plus_forecasting_inputs_transformation_timestamp_transformation_from_dict = GoogleCloudAiplatformV1SchemaTrainingjobDefinitionSeq2SeqPlusForecastingInputsTransformationTimestampTransformation.from_dict(google_cloud_aiplatform_v1_schema_trainingjob_definition_seq2_seq_plus_forecasting_inputs_transformation_timestamp_transformation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


