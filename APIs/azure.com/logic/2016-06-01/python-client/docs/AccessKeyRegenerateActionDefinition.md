# AccessKeyRegenerateActionDefinition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_type** | [**AccessKeyType**](AccessKeyType.md) |  | 

## Example

```python
from openapi_client.models.access_key_regenerate_action_definition import AccessKeyRegenerateActionDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of AccessKeyRegenerateActionDefinition from a JSON string
access_key_regenerate_action_definition_instance = AccessKeyRegenerateActionDefinition.from_json(json)
# print the JSON string representation of the object
print(AccessKeyRegenerateActionDefinition.to_json())

# convert the object into a dict
access_key_regenerate_action_definition_dict = access_key_regenerate_action_definition_instance.to_dict()
# create an instance of AccessKeyRegenerateActionDefinition from a dict
access_key_regenerate_action_definition_from_dict = AccessKeyRegenerateActionDefinition.from_dict(access_key_regenerate_action_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


