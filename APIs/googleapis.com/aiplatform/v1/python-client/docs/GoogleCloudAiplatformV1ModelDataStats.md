# GoogleCloudAiplatformV1ModelDataStats

Stats of data used for train or evaluate the Model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**test_annotations_count** | **str** | Number of Annotations that are used for evaluating this Model. If the Model is evaluated multiple times, this will be the number of test Annotations used by the first evaluation. If the Model is not evaluated, the number is 0. | [optional] 
**test_data_items_count** | **str** | Number of DataItems that were used for evaluating this Model. If the Model is evaluated multiple times, this will be the number of test DataItems used by the first evaluation. If the Model is not evaluated, the number is 0. | [optional] 
**training_annotations_count** | **str** | Number of Annotations that are used for training this Model. | [optional] 
**training_data_items_count** | **str** | Number of DataItems that were used for training this Model. | [optional] 
**validation_annotations_count** | **str** | Number of Annotations that are used for validating this Model during training. | [optional] 
**validation_data_items_count** | **str** | Number of DataItems that were used for validating this Model during training. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_model_data_stats import GoogleCloudAiplatformV1ModelDataStats

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ModelDataStats from a JSON string
google_cloud_aiplatform_v1_model_data_stats_instance = GoogleCloudAiplatformV1ModelDataStats.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ModelDataStats.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_model_data_stats_dict = google_cloud_aiplatform_v1_model_data_stats_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ModelDataStats from a dict
google_cloud_aiplatform_v1_model_data_stats_from_dict = GoogleCloudAiplatformV1ModelDataStats.from_dict(google_cloud_aiplatform_v1_model_data_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


