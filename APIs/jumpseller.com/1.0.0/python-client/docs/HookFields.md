# HookFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** | Hook creation date | [optional] 
**event** | **str** | Event associated with Hook | [optional] 
**id** | **int** | Unique identifier of the Hook | [optional] 
**name** | **str** | Hook name | [optional] 
**url** | **str** | Hook URL to be notified | [optional] 

## Example

```python
from openapi_client.models.hook_fields import HookFields

# TODO update the JSON string below
json = "{}"
# create an instance of HookFields from a JSON string
hook_fields_instance = HookFields.from_json(json)
# print the JSON string representation of the object
print(HookFields.to_json())

# convert the object into a dict
hook_fields_dict = hook_fields_instance.to_dict()
# create an instance of HookFields from a dict
hook_fields_from_dict = HookFields.from_dict(hook_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


