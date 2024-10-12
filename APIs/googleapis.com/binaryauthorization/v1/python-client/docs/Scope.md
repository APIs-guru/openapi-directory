# Scope

A scope specifier for `CheckSet` objects.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kubernetes_namespace** | **str** | Optional. Matches all Kubernetes service accounts in the provided namespace, unless a more specific &#x60;kubernetes_service_account&#x60; scope already matched. | [optional] 
**kubernetes_service_account** | **str** | Optional. Matches a single Kubernetes service account, e.g. &#x60;my-namespace:my-service-account&#x60;. &#x60;kubernetes_service_account&#x60; scope is always more specific than &#x60;kubernetes_namespace&#x60; scope for the same namespace. | [optional] 

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


