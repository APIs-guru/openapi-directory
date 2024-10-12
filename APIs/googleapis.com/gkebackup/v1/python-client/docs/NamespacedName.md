# NamespacedName

A reference to a namespaced resource in Kubernetes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Optional. The name of the Kubernetes resource. | [optional] 
**namespace** | **str** | Optional. The Namespace of the Kubernetes resource. | [optional] 

## Example

```python
from openapi_client.models.namespaced_name import NamespacedName

# TODO update the JSON string below
json = "{}"
# create an instance of NamespacedName from a JSON string
namespaced_name_instance = NamespacedName.from_json(json)
# print the JSON string representation of the object
print(NamespacedName.to_json())

# convert the object into a dict
namespaced_name_dict = namespaced_name_instance.to_dict()
# create an instance of NamespacedName from a dict
namespaced_name_from_dict = NamespacedName.from_dict(namespaced_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


