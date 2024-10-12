# Pod

A Kubernetes Pod.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**containers** | [**List[Container]**](Container.md) | Pod containers associated with this finding, if any. | [optional] 
**labels** | [**List[Label]**](Label.md) | Pod labels. For Kubernetes containers, these are applied to the container. | [optional] 
**name** | **str** | Kubernetes Pod name. | [optional] 
**ns** | **str** | Kubernetes Pod namespace. | [optional] 

## Example

```python
from openapi_client.models.pod import Pod

# TODO update the JSON string below
json = "{}"
# create an instance of Pod from a JSON string
pod_instance = Pod.from_json(json)
# print the JSON string representation of the object
print(Pod.to_json())

# convert the object into a dict
pod_dict = pod_instance.to_dict()
# create an instance of Pod from a dict
pod_from_dict = Pod.from_dict(pod_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


