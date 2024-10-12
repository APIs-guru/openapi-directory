# HorizontalPodAutoscaling

Configuration options for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled** | **bool** | Whether the Horizontal Pod Autoscaling feature is enabled in the cluster. When enabled, it ensures that metrics are collected into Stackdriver Monitoring. | [optional] 

## Example

```python
from openapi_client.models.horizontal_pod_autoscaling import HorizontalPodAutoscaling

# TODO update the JSON string below
json = "{}"
# create an instance of HorizontalPodAutoscaling from a JSON string
horizontal_pod_autoscaling_instance = HorizontalPodAutoscaling.from_json(json)
# print the JSON string representation of the object
print(HorizontalPodAutoscaling.to_json())

# convert the object into a dict
horizontal_pod_autoscaling_dict = horizontal_pod_autoscaling_instance.to_dict()
# create an instance of HorizontalPodAutoscaling from a dict
horizontal_pod_autoscaling_from_dict = HorizontalPodAutoscaling.from_dict(horizontal_pod_autoscaling_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


