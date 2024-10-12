# Action59


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **int** | Id of channel used by action | 
**codes** | **object** | Object containing named Javascript code sets | [optional] 
**desc** | **str** | Action description | [optional] 
**function_id** | **str** | Hash id of channel function used by action | 
**name** | **str** | Action name | 
**parameters** | **object** | Object containing channel-defined action parameters | [optional] 

## Example

```python
from openapi_client.models.action59 import Action59

# TODO update the JSON string below
json = "{}"
# create an instance of Action59 from a JSON string
action59_instance = Action59.from_json(json)
# print the JSON string representation of the object
print(Action59.to_json())

# convert the object into a dict
action59_dict = action59_instance.to_dict()
# create an instance of Action59 from a dict
action59_from_dict = Action59.from_dict(action59_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


