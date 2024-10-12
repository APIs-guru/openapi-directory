# GoogleCloudAiplatformV1StudySpecMetricSpec

Represents a metric to optimize.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**goal** | **str** | Required. The optimization goal of the metric. | [optional] 
**metric_id** | **str** | Required. The ID of the metric. Must not contain whitespaces and must be unique amongst all MetricSpecs. | [optional] 
**safety_config** | [**GoogleCloudAiplatformV1StudySpecMetricSpecSafetyMetricConfig**](GoogleCloudAiplatformV1StudySpecMetricSpecSafetyMetricConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_study_spec_metric_spec import GoogleCloudAiplatformV1StudySpecMetricSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1StudySpecMetricSpec from a JSON string
google_cloud_aiplatform_v1_study_spec_metric_spec_instance = GoogleCloudAiplatformV1StudySpecMetricSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1StudySpecMetricSpec.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_study_spec_metric_spec_dict = google_cloud_aiplatform_v1_study_spec_metric_spec_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1StudySpecMetricSpec from a dict
google_cloud_aiplatform_v1_study_spec_metric_spec_from_dict = GoogleCloudAiplatformV1StudySpecMetricSpec.from_dict(google_cloud_aiplatform_v1_study_spec_metric_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


