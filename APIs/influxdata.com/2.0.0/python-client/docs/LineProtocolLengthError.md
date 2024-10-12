# LineProtocolLengthError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Code is the machine-readable error code. | [readonly] 
**max_length** | **int** | Max length in bytes for a body of line-protocol. | [readonly] 
**message** | **str** | Message is a human-readable message. | [readonly] 

## Example

```python
from openapi_client.models.line_protocol_length_error import LineProtocolLengthError

# TODO update the JSON string below
json = "{}"
# create an instance of LineProtocolLengthError from a JSON string
line_protocol_length_error_instance = LineProtocolLengthError.from_json(json)
# print the JSON string representation of the object
print(LineProtocolLengthError.to_json())

# convert the object into a dict
line_protocol_length_error_dict = line_protocol_length_error_instance.to_dict()
# create an instance of LineProtocolLengthError from a dict
line_protocol_length_error_from_dict = LineProtocolLengthError.from_dict(line_protocol_length_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


