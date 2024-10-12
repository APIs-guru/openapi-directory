# HookEditFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | **str** | Event associated with Hook | 
**url** | **str** | Hook URL to be notified | 

## Example

```python
from openapi_client.models.hook_edit_fields import HookEditFields

# TODO update the JSON string below
json = "{}"
# create an instance of HookEditFields from a JSON string
hook_edit_fields_instance = HookEditFields.from_json(json)
# print the JSON string representation of the object
print(HookEditFields.to_json())

# convert the object into a dict
hook_edit_fields_dict = hook_edit_fields_instance.to_dict()
# create an instance of HookEditFields from a dict
hook_edit_fields_from_dict = HookEditFields.from_dict(hook_edit_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


