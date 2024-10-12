# GoogleCloudMlV1StudyConfigMetricSpec

Represents a metric to optimize.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**goal** | **str** | Required. The optimization goal of the metric. | [optional] 
**metric** | **str** | Required. The name of the metric. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_study_config_metric_spec import GoogleCloudMlV1StudyConfigMetricSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1StudyConfigMetricSpec from a JSON string
google_cloud_ml_v1_study_config_metric_spec_instance = GoogleCloudMlV1StudyConfigMetricSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1StudyConfigMetricSpec.to_json())

# convert the object into a dict
google_cloud_ml_v1_study_config_metric_spec_dict = google_cloud_ml_v1_study_config_metric_spec_instance.to_dict()
# create an instance of GoogleCloudMlV1StudyConfigMetricSpec from a dict
google_cloud_ml_v1_study_config_metric_spec_from_dict = GoogleCloudMlV1StudyConfigMetricSpec.from_dict(google_cloud_ml_v1_study_config_metric_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


