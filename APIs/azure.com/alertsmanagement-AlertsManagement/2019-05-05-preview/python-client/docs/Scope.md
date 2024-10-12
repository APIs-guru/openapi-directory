# Scope

Target scope for a given action rule. By default scope will be the subscription. User can also provide list of resource groups or list of resources from the scope subscription as well.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scope_type** | **str** | type of target scope | [optional] 
**values** | **List[str]** | list of ARM IDs of the given scope type which will be the target of the given action rule. | [optional] 

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


