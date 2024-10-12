# Namespace

Namespace represents a namespace across the Fleet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. When the namespace was created. | [optional] [readonly] 
**delete_time** | **str** | Output only. When the namespace was deleted. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Optional. Labels for this Namespace. | [optional] 
**name** | **str** | The resource name for the namespace &#x60;projects/{project}/locations/{location}/namespaces/{namespace}&#x60; | [optional] 
**namespace_labels** | **Dict[str, str]** | Optional. Namespace-level cluster namespace labels. These labels are applied to the related namespace of the member clusters bound to the parent Scope. Scope-level labels (&#x60;namespace_labels&#x60; in the Fleet Scope resource) take precedence over Namespace-level labels if they share a key. Keys and values must be Kubernetes-conformant. | [optional] 
**scope** | **str** | Required. Scope associated with the namespace | [optional] 
**state** | [**NamespaceLifecycleState**](NamespaceLifecycleState.md) |  | [optional] 
**uid** | **str** | Output only. Google-generated UUID for this resource. This is unique across all namespace resources. If a namespace resource is deleted and another resource with the same name is created, it gets a different uid. | [optional] [readonly] 
**update_time** | **str** | Output only. When the namespace was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.namespace import Namespace

# TODO update the JSON string below
json = "{}"
# create an instance of Namespace from a JSON string
namespace_instance = Namespace.from_json(json)
# print the JSON string representation of the object
print(Namespace.to_json())

# convert the object into a dict
namespace_dict = namespace_instance.to_dict()
# create an instance of Namespace from a dict
namespace_from_dict = Namespace.from_dict(namespace_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


