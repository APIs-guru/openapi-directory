# GoogleCloudAiplatformV1AutoscalingMetricSpec

The metric specification that defines the target resource utilization (CPU utilization, accelerator's duty cycle, and so on) for calculating the desired replica count.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric_name** | **str** | Required. The resource metric name. Supported metrics: * For Online Prediction: * &#x60;aiplatform.googleapis.com/prediction/online/accelerator/duty_cycle&#x60; * &#x60;aiplatform.googleapis.com/prediction/online/cpu/utilization&#x60; | [optional] 
**target** | **int** | The target resource utilization in percentage (1% - 100%) for the given metric; once the real usage deviates from the target by a certain percentage, the machine replicas change. The default value is 60 (representing 60%) if not provided. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_autoscaling_metric_spec import GoogleCloudAiplatformV1AutoscalingMetricSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1AutoscalingMetricSpec from a JSON string
google_cloud_aiplatform_v1_autoscaling_metric_spec_instance = GoogleCloudAiplatformV1AutoscalingMetricSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1AutoscalingMetricSpec.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_autoscaling_metric_spec_dict = google_cloud_aiplatform_v1_autoscaling_metric_spec_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1AutoscalingMetricSpec from a dict
google_cloud_aiplatform_v1_autoscaling_metric_spec_from_dict = GoogleCloudAiplatformV1AutoscalingMetricSpec.from_dict(google_cloud_aiplatform_v1_autoscaling_metric_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


