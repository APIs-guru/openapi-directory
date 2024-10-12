# ErrorChannel

Unsupported channel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | Additional information about the error | 
**instance** | **str** | Internal Trace ID | 
**title** | **str** | Generic error message | 
**type** | **str** | Link to error / remediation options | 

## Example

```python
from openapi_client.models.error_channel import ErrorChannel

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorChannel from a JSON string
error_channel_instance = ErrorChannel.from_json(json)
# print the JSON string representation of the object
print(ErrorChannel.to_json())

# convert the object into a dict
error_channel_dict = error_channel_instance.to_dict()
# create an instance of ErrorChannel from a dict
error_channel_from_dict = ErrorChannel.from_dict(error_channel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


