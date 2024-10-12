# ErrorMessageParamsInvalidParametersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of invalid parameter | [optional] 
**reason** | **str** | Reason of failure | [optional] 

## Example

```python
from openapi_client.models.error_message_params_invalid_parameters_inner import ErrorMessageParamsInvalidParametersInner

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorMessageParamsInvalidParametersInner from a JSON string
error_message_params_invalid_parameters_inner_instance = ErrorMessageParamsInvalidParametersInner.from_json(json)
# print the JSON string representation of the object
print(ErrorMessageParamsInvalidParametersInner.to_json())

# convert the object into a dict
error_message_params_invalid_parameters_inner_dict = error_message_params_invalid_parameters_inner_instance.to_dict()
# create an instance of ErrorMessageParamsInvalidParametersInner from a dict
error_message_params_invalid_parameters_inner_from_dict = ErrorMessageParamsInvalidParametersInner.from_dict(error_message_params_invalid_parameters_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


