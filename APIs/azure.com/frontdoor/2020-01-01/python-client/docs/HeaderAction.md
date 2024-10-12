# HeaderAction

An action that can manipulate an http header.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header_action_type** | **str** | Which type of manipulation to apply to the header. | 
**header_name** | **str** | The name of the header this action will apply to. | 
**value** | **str** | The value to update the given header name with. This value is not used if the actionType is Delete. | [optional] 

## Example

```python
from openapi_client.models.header_action import HeaderAction

# TODO update the JSON string below
json = "{}"
# create an instance of HeaderAction from a JSON string
header_action_instance = HeaderAction.from_json(json)
# print the JSON string representation of the object
print(HeaderAction.to_json())

# convert the object into a dict
header_action_dict = header_action_instance.to_dict()
# create an instance of HeaderAction from a dict
header_action_from_dict = HeaderAction.from_dict(header_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


