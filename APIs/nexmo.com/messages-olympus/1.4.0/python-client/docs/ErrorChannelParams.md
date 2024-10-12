# ErrorChannelParams

Invalid channel parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | Additional information about the error | 
**instance** | **str** | Internal Trace ID | 
**invalid_parameters** | [**List[ErrorChannelParamsInvalidParametersInner]**](ErrorChannelParamsInvalidParametersInner.md) |  | [optional] 
**title** | **str** | Generic error message | 
**type** | **str** | Link to error / remediation options | 

## Example

```python
from openapi_client.models.error_channel_params import ErrorChannelParams

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorChannelParams from a JSON string
error_channel_params_instance = ErrorChannelParams.from_json(json)
# print the JSON string representation of the object
print(ErrorChannelParams.to_json())

# convert the object into a dict
error_channel_params_dict = error_channel_params_instance.to_dict()
# create an instance of ErrorChannelParams from a dict
error_channel_params_from_dict = ErrorChannelParams.from_dict(error_channel_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


