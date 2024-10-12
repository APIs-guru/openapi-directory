# Scope

Scope of a Managed Network

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**management_groups** | [**List[ResourceId]**](ResourceId.md) | The collection of management groups covered by the Managed Network | [optional] 
**subnets** | [**List[ResourceId]**](ResourceId.md) | The collection of  subnets covered by the Managed Network | [optional] 
**subscriptions** | [**List[ResourceId]**](ResourceId.md) | The collection of subscriptions covered by the Managed Network | [optional] 
**virtual_networks** | [**List[ResourceId]**](ResourceId.md) | The collection of virtual nets covered by the Managed Network | [optional] 

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


