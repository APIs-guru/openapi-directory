# LineProtocolError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Code is the machine-readable error code. | [readonly] 
**err** | **str** | Err is a stack of errors that occurred during processing of the request. Useful for debugging. | [readonly] 
**line** | **int** | First line within sent body containing malformed data | [optional] [readonly] 
**message** | **str** | Message is a human-readable message. | [readonly] 
**op** | **str** | Op describes the logical code operation during error. Useful for debugging. | [readonly] 

## Example

```python
from openapi_client.models.line_protocol_error import LineProtocolError

# TODO update the JSON string below
json = "{}"
# create an instance of LineProtocolError from a JSON string
line_protocol_error_instance = LineProtocolError.from_json(json)
# print the JSON string representation of the object
print(LineProtocolError.to_json())

# convert the object into a dict
line_protocol_error_dict = line_protocol_error_instance.to_dict()
# create an instance of LineProtocolError from a dict
line_protocol_error_from_dict = LineProtocolError.from_dict(line_protocol_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


