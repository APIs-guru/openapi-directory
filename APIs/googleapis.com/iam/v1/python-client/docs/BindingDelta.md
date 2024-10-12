# BindingDelta

One delta entry for Binding. Each individual change (only one member in each entry) to a binding will be a separate entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | The action that was performed on a Binding. Required | [optional] 
**condition** | [**Expr**](Expr.md) |  | [optional] 
**member** | **str** | A single identity requesting access for a Google Cloud resource. Follows the same format of Binding.members. Required | [optional] 
**role** | **str** | Role that is assigned to &#x60;members&#x60;. For example, &#x60;roles/viewer&#x60;, &#x60;roles/editor&#x60;, or &#x60;roles/owner&#x60;. Required | [optional] 

## Example

```python
from openapi_client.models.binding_delta import BindingDelta

# TODO update the JSON string below
json = "{}"
# create an instance of BindingDelta from a JSON string
binding_delta_instance = BindingDelta.from_json(json)
# print the JSON string representation of the object
print(BindingDelta.to_json())

# convert the object into a dict
binding_delta_dict = binding_delta_instance.to_dict()
# create an instance of BindingDelta from a dict
binding_delta_from_dict = BindingDelta.from_dict(binding_delta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


