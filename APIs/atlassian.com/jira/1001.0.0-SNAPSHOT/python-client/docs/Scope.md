# Scope

The projects the item is associated with. Indicated for items associated with [next-gen projects](https://confluence.atlassian.com/x/loMyO).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**project** | [**ProjectDetails**](ProjectDetails.md) | The project the item has scope in. | [optional] [readonly] 
**type** | **str** | The type of scope. | [optional] [readonly] 

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


