# ErrorMessageParams

Invalid message parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | Additional information about the error | 
**instance** | **str** | Internal Trace ID | 
**invalid_parameters** | [**List[ErrorMessageParamsInvalidParametersInner]**](ErrorMessageParamsInvalidParametersInner.md) |  | [optional] 
**title** | **str** | Generic error message | 
**type** | **str** | Link to error / remediation options | 

## Example

```python
from openapi_client.models.error_message_params import ErrorMessageParams

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorMessageParams from a JSON string
error_message_params_instance = ErrorMessageParams.from_json(json)
# print the JSON string representation of the object
print(ErrorMessageParams.to_json())

# convert the object into a dict
error_message_params_dict = error_message_params_instance.to_dict()
# create an instance of ErrorMessageParams from a dict
error_message_params_from_dict = ErrorMessageParams.from_dict(error_message_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


