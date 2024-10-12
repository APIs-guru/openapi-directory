# PodResult

Result of evaluating the whole GKE policy for one Pod.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_results** | [**List[ImageResult]**](ImageResult.md) | Per-image details. | [optional] 
**kubernetes_namespace** | **str** | The Kubernetes namespace of the Pod. | [optional] 
**kubernetes_service_account** | **str** | The Kubernetes service account of the Pod. | [optional] 
**pod_name** | **str** | The name of the Pod. | [optional] 
**verdict** | **str** | The result of evaluating this Pod. | [optional] 

## Example

```python
from openapi_client.models.pod_result import PodResult

# TODO update the JSON string below
json = "{}"
# create an instance of PodResult from a JSON string
pod_result_instance = PodResult.from_json(json)
# print the JSON string representation of the object
print(PodResult.to_json())

# convert the object into a dict
pod_result_dict = pod_result_instance.to_dict()
# create an instance of PodResult from a dict
pod_result_from_dict = PodResult.from_dict(pod_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


