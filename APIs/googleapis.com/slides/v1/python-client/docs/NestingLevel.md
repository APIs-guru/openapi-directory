# NestingLevel

Contains properties describing the look and feel of a list bullet at a given level of nesting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bullet_style** | [**TextStyle**](TextStyle.md) |  | [optional] 

## Example

```python
from openapi_client.models.nesting_level import NestingLevel

# TODO update the JSON string below
json = "{}"
# create an instance of NestingLevel from a JSON string
nesting_level_instance = NestingLevel.from_json(json)
# print the JSON string representation of the object
print(NestingLevel.to_json())

# convert the object into a dict
nesting_level_dict = nesting_level_instance.to_dict()
# create an instance of NestingLevel from a dict
nesting_level_from_dict = NestingLevel.from_dict(nesting_level_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


