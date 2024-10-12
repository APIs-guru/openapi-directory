# CustomLevel

`CustomLevel` is an `AccessLevel` using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request. See CEL spec at: https://github.com/google/cel-spec

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expr** | [**Expr**](Expr.md) |  | [optional] 

## Example

```python
from openapi_client.models.custom_level import CustomLevel

# TODO update the JSON string below
json = "{}"
# create an instance of CustomLevel from a JSON string
custom_level_instance = CustomLevel.from_json(json)
# print the JSON string representation of the object
print(CustomLevel.to_json())

# convert the object into a dict
custom_level_dict = custom_level_instance.to_dict()
# create an instance of CustomLevel from a dict
custom_level_from_dict = CustomLevel.from_dict(custom_level_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


