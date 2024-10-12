# StackPack

Message containing Stack Pack information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**descriptions** | **Dict[str, str]** | The stack pack advice strings. | [optional] 
**icon_data_url** | **str** | The stack pack icon data uri. | [optional] 
**id** | **str** | The stack pack id. | [optional] 
**title** | **str** | The stack pack title. | [optional] 

## Example

```python
from openapi_client.models.stack_pack import StackPack

# TODO update the JSON string below
json = "{}"
# create an instance of StackPack from a JSON string
stack_pack_instance = StackPack.from_json(json)
# print the JSON string representation of the object
print(StackPack.to_json())

# convert the object into a dict
stack_pack_dict = stack_pack_instance.to_dict()
# create an instance of StackPack from a dict
stack_pack_from_dict = StackPack.from_dict(stack_pack_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


