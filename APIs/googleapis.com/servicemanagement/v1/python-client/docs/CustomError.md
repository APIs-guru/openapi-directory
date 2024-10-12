# CustomError

Customize service error responses. For example, list any service specific protobuf types that can appear in error detail lists of error responses. Example: custom_error: types: - google.foo.v1.CustomError - google.foo.v1.AnotherError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rules** | [**List[CustomErrorRule]**](CustomErrorRule.md) | The list of custom error rules that apply to individual API messages. **NOTE:** All service configuration rules follow \&quot;last one wins\&quot; order. | [optional] 
**types** | **List[str]** | The list of custom error detail types, e.g. &#39;google.foo.v1.CustomError&#39;. | [optional] 

## Example

```python
from openapi_client.models.custom_error import CustomError

# TODO update the JSON string below
json = "{}"
# create an instance of CustomError from a JSON string
custom_error_instance = CustomError.from_json(json)
# print the JSON string representation of the object
print(CustomError.to_json())

# convert the object into a dict
custom_error_dict = custom_error_instance.to_dict()
# create an instance of CustomError from a dict
custom_error_from_dict = CustomError.from_dict(custom_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


