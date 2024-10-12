# StructMatcher

StructMatcher provides a general interface to check if a given value is matched in google.protobuf.Struct. It uses `path` to retrieve the value from the struct and then check if it's matched to the specified value. For example, for the following Struct: .. code-block:: yaml fields: a: struct_value: fields: b: struct_value: fields: c: string_value: pro t: list_value: values: - string_value: m - string_value: n The following MetadataMatcher is matched as the path [a, b, c] will retrieve a string value \"pro\" from the Metadata which is matched to the specified prefix match. .. code-block:: yaml path: - key: a - key: b - key: c value: string_match: prefix: pr The following StructMatcher is matched as the code will match one of the string values in the list at the path [a, t]. .. code-block:: yaml path: - key: a - key: t value: list_match: one_of: string_match: exact: m An example use of StructMatcher is to match metadata in envoy.v*.core.Node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | [**List[PathSegment]**](PathSegment.md) | The path to retrieve the Value from the Struct. | [optional] 
**value** | [**ValueMatcher**](ValueMatcher.md) |  | [optional] 

## Example

```python
from openapi_client.models.struct_matcher import StructMatcher

# TODO update the JSON string below
json = "{}"
# create an instance of StructMatcher from a JSON string
struct_matcher_instance = StructMatcher.from_json(json)
# print the JSON string representation of the object
print(StructMatcher.to_json())

# convert the object into a dict
struct_matcher_dict = struct_matcher_instance.to_dict()
# create an instance of StructMatcher from a dict
struct_matcher_from_dict = StructMatcher.from_dict(struct_matcher_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


