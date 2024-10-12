# Trigger54


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **int** | Id of channel used by trigger | 
**codes** | **object** | Object containing named Javascript code sets | [optional] 
**desc** | **str** | Trigger description | [optional] 
**function_id** | **str** | Hash id of channel function used by trigger | 
**name** | **str** | Trigger name | 
**parameters** | **object** | Object containing channel-defined trigger parameters | [optional] 

## Example

```python
from openapi_client.models.trigger54 import Trigger54

# TODO update the JSON string below
json = "{}"
# create an instance of Trigger54 from a JSON string
trigger54_instance = Trigger54.from_json(json)
# print the JSON string representation of the object
print(Trigger54.to_json())

# convert the object into a dict
trigger54_dict = trigger54_instance.to_dict()
# create an instance of Trigger54 from a dict
trigger54_from_dict = Trigger54.from_dict(trigger54_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


