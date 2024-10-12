# DefaultLevelValue

Details of scheme and new default level.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_level_id** | **str** | The ID of the issue security level to set as default for the specified scheme. Providing null will reset the default level. | 
**issue_security_scheme_id** | **str** | The ID of the issue security scheme to set default level for. | 

## Example

```python
from openapi_client.models.default_level_value import DefaultLevelValue

# TODO update the JSON string below
json = "{}"
# create an instance of DefaultLevelValue from a JSON string
default_level_value_instance = DefaultLevelValue.from_json(json)
# print the JSON string representation of the object
print(DefaultLevelValue.to_json())

# convert the object into a dict
default_level_value_dict = default_level_value_instance.to_dict()
# create an instance of DefaultLevelValue from a dict
default_level_value_from_dict = DefaultLevelValue.from_dict(default_level_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


