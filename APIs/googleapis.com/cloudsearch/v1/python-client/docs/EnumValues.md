# EnumValues

List of enum values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | **List[str]** | The maximum allowable length for string values is 32 characters. | [optional] 

## Example

```python
from openapi_client.models.enum_values import EnumValues

# TODO update the JSON string below
json = "{}"
# create an instance of EnumValues from a JSON string
enum_values_instance = EnumValues.from_json(json)
# print the JSON string representation of the object
print(EnumValues.to_json())

# convert the object into a dict
enum_values_dict = enum_values_instance.to_dict()
# create an instance of EnumValues from a dict
enum_values_from_dict = EnumValues.from_dict(enum_values_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


