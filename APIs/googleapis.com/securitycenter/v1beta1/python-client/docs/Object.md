# Object

Kubernetes object related to the finding, uniquely identified by GKNN. Used if the object Kind is not one of Pod, Node, NodePool, Binding, or AccessReview.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**containers** | [**List[Container]**](Container.md) | Pod containers associated with this finding, if any. | [optional] 
**group** | **str** | Kubernetes object group, such as \&quot;policy.k8s.io/v1\&quot;. | [optional] 
**kind** | **str** | Kubernetes object kind, such as \&quot;Namespace\&quot;. | [optional] 
**name** | **str** | Kubernetes object name. For details see https://kubernetes.io/docs/concepts/overview/working-with-objects/names/. | [optional] 
**ns** | **str** | Kubernetes object namespace. Must be a valid DNS label. Named \&quot;ns\&quot; to avoid collision with C++ namespace keyword. For details see https://kubernetes.io/docs/tasks/administer-cluster/namespaces/. | [optional] 

## Example

```python
from openapi_client.models.object import Object

# TODO update the JSON string below
json = "{}"
# create an instance of Object from a JSON string
object_instance = Object.from_json(json)
# print the JSON string representation of the object
print(Object.to_json())

# convert the object into a dict
object_dict = object_instance.to_dict()
# create an instance of Object from a dict
object_from_dict = Object.from_dict(object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


