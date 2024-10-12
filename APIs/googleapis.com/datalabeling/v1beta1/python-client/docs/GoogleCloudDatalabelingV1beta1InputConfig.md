# GoogleCloudDatalabelingV1beta1InputConfig

The configuration of input data, including data type, location, etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_type** | **str** | Optional. The type of annotation to be performed on this data. You must specify this field if you are using this InputConfig in an EvaluationJob. | [optional] 
**bigquery_source** | [**GoogleCloudDatalabelingV1beta1BigQuerySource**](GoogleCloudDatalabelingV1beta1BigQuerySource.md) |  | [optional] 
**classification_metadata** | [**GoogleCloudDatalabelingV1beta1ClassificationMetadata**](GoogleCloudDatalabelingV1beta1ClassificationMetadata.md) |  | [optional] 
**data_type** | **str** | Required. Data type must be specifed when user tries to import data. | [optional] 
**gcs_source** | [**GoogleCloudDatalabelingV1beta1GcsSource**](GoogleCloudDatalabelingV1beta1GcsSource.md) |  | [optional] 
**text_metadata** | [**GoogleCloudDatalabelingV1beta1TextMetadata**](GoogleCloudDatalabelingV1beta1TextMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_input_config import GoogleCloudDatalabelingV1beta1InputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1InputConfig from a JSON string
google_cloud_datalabeling_v1beta1_input_config_instance = GoogleCloudDatalabelingV1beta1InputConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1InputConfig.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_input_config_dict = google_cloud_datalabeling_v1beta1_input_config_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1InputConfig from a dict
google_cloud_datalabeling_v1beta1_input_config_from_dict = GoogleCloudDatalabelingV1beta1InputConfig.from_dict(google_cloud_datalabeling_v1beta1_input_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


