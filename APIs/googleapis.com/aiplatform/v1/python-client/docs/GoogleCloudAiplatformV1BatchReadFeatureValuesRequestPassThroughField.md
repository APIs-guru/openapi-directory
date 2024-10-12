# GoogleCloudAiplatformV1BatchReadFeatureValuesRequestPassThroughField

Describe pass-through fields in read_instance source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_name** | **str** | Required. The name of the field in the CSV header or the name of the column in BigQuery table. The naming restriction is the same as Feature.name. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_batch_read_feature_values_request_pass_through_field import GoogleCloudAiplatformV1BatchReadFeatureValuesRequestPassThroughField

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1BatchReadFeatureValuesRequestPassThroughField from a JSON string
google_cloud_aiplatform_v1_batch_read_feature_values_request_pass_through_field_instance = GoogleCloudAiplatformV1BatchReadFeatureValuesRequestPassThroughField.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1BatchReadFeatureValuesRequestPassThroughField.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_batch_read_feature_values_request_pass_through_field_dict = google_cloud_aiplatform_v1_batch_read_feature_values_request_pass_through_field_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1BatchReadFeatureValuesRequestPassThroughField from a dict
google_cloud_aiplatform_v1_batch_read_feature_values_request_pass_through_field_from_dict = GoogleCloudAiplatformV1BatchReadFeatureValuesRequestPassThroughField.from_dict(google_cloud_aiplatform_v1_batch_read_feature_values_request_pass_through_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


