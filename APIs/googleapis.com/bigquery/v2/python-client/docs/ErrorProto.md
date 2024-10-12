# ErrorProto

Error details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**debug_info** | **str** | Debugging information. This property is internal to Google and should not be used. | [optional] 
**location** | **str** | Specifies where the error occurred, if present. | [optional] 
**message** | **str** | A human-readable description of the error. | [optional] 
**reason** | **str** | A short error code that summarizes the error. | [optional] 

## Example

```python
from openapi_client.models.error_proto import ErrorProto

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorProto from a JSON string
error_proto_instance = ErrorProto.from_json(json)
# print the JSON string representation of the object
print(ErrorProto.to_json())

# convert the object into a dict
error_proto_dict = error_proto_instance.to_dict()
# create an instance of ErrorProto from a dict
error_proto_from_dict = ErrorProto.from_dict(error_proto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


