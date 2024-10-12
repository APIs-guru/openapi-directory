# Scope

Scope represents a Scope in a Fleet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. When the scope was created. | [optional] [readonly] 
**delete_time** | **str** | Output only. When the scope was deleted. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Optional. Labels for this Scope. | [optional] 
**name** | **str** | The resource name for the scope &#x60;projects/{project}/locations/{location}/scopes/{scope}&#x60; | [optional] 
**namespace_labels** | **Dict[str, str]** | Optional. Scope-level cluster namespace labels. For the member clusters bound to the Scope, these labels are applied to each namespace under the Scope. Scope-level labels take precedence over Namespace-level labels (&#x60;namespace_labels&#x60; in the Fleet Namespace resource) if they share a key. Keys and values must be Kubernetes-conformant. | [optional] 
**state** | [**ScopeLifecycleState**](ScopeLifecycleState.md) |  | [optional] 
**uid** | **str** | Output only. Google-generated UUID for this resource. This is unique across all scope resources. If a scope resource is deleted and another resource with the same name is created, it gets a different uid. | [optional] [readonly] 
**update_time** | **str** | Output only. When the scope was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.scope import Scope

# TODO update the JSON string below
json = "{}"
# create an instance of Scope from a JSON string
scope_instance = Scope.from_json(json)
# print the JSON string representation of the object
print(Scope.to_json())

# convert the object into a dict
scope_dict = scope_instance.to_dict()
# create an instance of Scope from a dict
scope_from_dict = Scope.from_dict(scope_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


