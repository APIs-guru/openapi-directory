# NamespacedNames

A list of namespaced Kubernetes resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**namespaced_names** | [**List[NamespacedName]**](NamespacedName.md) | Optional. A list of namespaced Kubernetes resources. | [optional] 

## Example

```python
from openapi_client.models.namespaced_names import NamespacedNames

# TODO update the JSON string below
json = "{}"
# create an instance of NamespacedNames from a JSON string
namespaced_names_instance = NamespacedNames.from_json(json)
# print the JSON string representation of the object
print(NamespacedNames.to_json())

# convert the object into a dict
namespaced_names_dict = namespaced_names_instance.to_dict()
# create an instance of NamespacedNames from a dict
namespaced_names_from_dict = NamespacedNames.from_dict(namespaced_names_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


