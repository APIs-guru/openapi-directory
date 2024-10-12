# GroupKind

This is a direct map to the Kubernetes GroupKind type [GroupKind](https://godoc.org/k8s.io/apimachinery/pkg/runtime/schema#GroupKind) and is used for identifying specific \"types\" of resources to restore.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_group** | **str** | Optional. API group string of a Kubernetes resource, e.g. \&quot;apiextensions.k8s.io\&quot;, \&quot;storage.k8s.io\&quot;, etc. Note: use empty string for core API group | [optional] 
**resource_kind** | **str** | Optional. Kind of a Kubernetes resource, must be in UpperCamelCase (PascalCase) and singular form. E.g. \&quot;CustomResourceDefinition\&quot;, \&quot;StorageClass\&quot;, etc. | [optional] 

## Example

```python
from openapi_client.models.group_kind import GroupKind

# TODO update the JSON string below
json = "{}"
# create an instance of GroupKind from a JSON string
group_kind_instance = GroupKind.from_json(json)
# print the JSON string representation of the object
print(GroupKind.to_json())

# convert the object into a dict
group_kind_dict = group_kind_instance.to_dict()
# create an instance of GroupKind from a dict
group_kind_from_dict = GroupKind.from_dict(group_kind_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


