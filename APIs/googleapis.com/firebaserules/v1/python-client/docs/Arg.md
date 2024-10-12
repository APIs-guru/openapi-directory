# Arg

Arg matchers for the mock function.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**any_value** | **object** | A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } | [optional] 
**exact_value** | **object** | Argument exactly matches value provided. | [optional] 

## Example

```python
from openapi_client.models.arg import Arg

# TODO update the JSON string below
json = "{}"
# create an instance of Arg from a JSON string
arg_instance = Arg.from_json(json)
# print the JSON string representation of the object
print(Arg.to_json())

# convert the object into a dict
arg_dict = arg_instance.to_dict()
# create an instance of Arg from a dict
arg_from_dict = Arg.from_dict(arg_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


