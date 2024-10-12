# GoogleCloudAiplatformV1beta1FeatureValueDestination

A destination location for Feature values and format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_destination** | [**GoogleCloudAiplatformV1beta1BigQueryDestination**](GoogleCloudAiplatformV1beta1BigQueryDestination.md) |  | [optional] 
**csv_destination** | [**GoogleCloudAiplatformV1beta1CsvDestination**](GoogleCloudAiplatformV1beta1CsvDestination.md) |  | [optional] 
**tfrecord_destination** | [**GoogleCloudAiplatformV1beta1TFRecordDestination**](GoogleCloudAiplatformV1beta1TFRecordDestination.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_feature_value_destination import GoogleCloudAiplatformV1beta1FeatureValueDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1FeatureValueDestination from a JSON string
google_cloud_aiplatform_v1beta1_feature_value_destination_instance = GoogleCloudAiplatformV1beta1FeatureValueDestination.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1FeatureValueDestination.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_feature_value_destination_dict = google_cloud_aiplatform_v1beta1_feature_value_destination_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1FeatureValueDestination from a dict
google_cloud_aiplatform_v1beta1_feature_value_destination_from_dict = GoogleCloudAiplatformV1beta1FeatureValueDestination.from_dict(google_cloud_aiplatform_v1beta1_feature_value_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


