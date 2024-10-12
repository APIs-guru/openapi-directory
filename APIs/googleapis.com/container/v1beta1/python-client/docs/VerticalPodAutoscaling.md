# VerticalPodAutoscaling

VerticalPodAutoscaling contains global, per-cluster information required by Vertical Pod Autoscaler to automatically adjust the resources of pods controlled by it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enables vertical pod autoscaling. | [optional] 

## Example

```python
from openapi_client.models.vertical_pod_autoscaling import VerticalPodAutoscaling

# TODO update the JSON string below
json = "{}"
# create an instance of VerticalPodAutoscaling from a JSON string
vertical_pod_autoscaling_instance = VerticalPodAutoscaling.from_json(json)
# print the JSON string representation of the object
print(VerticalPodAutoscaling.to_json())

# convert the object into a dict
vertical_pod_autoscaling_dict = vertical_pod_autoscaling_instance.to_dict()
# create an instance of VerticalPodAutoscaling from a dict
vertical_pod_autoscaling_from_dict = VerticalPodAutoscaling.from_dict(vertical_pod_autoscaling_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


