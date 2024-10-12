# RegenerateActionParameter

The access key regenerate action content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_type** | [**KeyType**](KeyType.md) |  | [optional] 

## Example

```python
from openapi_client.models.regenerate_action_parameter import RegenerateActionParameter

# TODO update the JSON string below
json = "{}"
# create an instance of RegenerateActionParameter from a JSON string
regenerate_action_parameter_instance = RegenerateActionParameter.from_json(json)
# print the JSON string representation of the object
print(RegenerateActionParameter.to_json())

# convert the object into a dict
regenerate_action_parameter_dict = regenerate_action_parameter_instance.to_dict()
# create an instance of RegenerateActionParameter from a dict
regenerate_action_parameter_from_dict = RegenerateActionParameter.from_dict(regenerate_action_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


