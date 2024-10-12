# GoogleCloudMlV1MetricSpec

MetricSpec contains the specifications to use to calculate the desired nodes count when autoscaling is enabled.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | metric name. | [optional] 
**target** | **int** | Target specifies the target value for the given metric; once real metric deviates from the threshold by a certain percentage, the node count changes. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_metric_spec import GoogleCloudMlV1MetricSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1MetricSpec from a JSON string
google_cloud_ml_v1_metric_spec_instance = GoogleCloudMlV1MetricSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1MetricSpec.to_json())

# convert the object into a dict
google_cloud_ml_v1_metric_spec_dict = google_cloud_ml_v1_metric_spec_instance.to_dict()
# create an instance of GoogleCloudMlV1MetricSpec from a dict
google_cloud_ml_v1_metric_spec_from_dict = GoogleCloudMlV1MetricSpec.from_dict(google_cloud_ml_v1_metric_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


