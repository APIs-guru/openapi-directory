# ErrorChannelParamsInvalidParametersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of invalid parameter | [optional] 
**reason** | **str** | Reason of failure | [optional] 

## Example

```python
from openapi_client.models.error_channel_params_invalid_parameters_inner import ErrorChannelParamsInvalidParametersInner

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorChannelParamsInvalidParametersInner from a JSON string
error_channel_params_invalid_parameters_inner_instance = ErrorChannelParamsInvalidParametersInner.from_json(json)
# print the JSON string representation of the object
print(ErrorChannelParamsInvalidParametersInner.to_json())

# convert the object into a dict
error_channel_params_invalid_parameters_inner_dict = error_channel_params_invalid_parameters_inner_instance.to_dict()
# create an instance of ErrorChannelParamsInvalidParametersInner from a dict
error_channel_params_invalid_parameters_inner_from_dict = ErrorChannelParamsInvalidParametersInner.from_dict(error_channel_params_invalid_parameters_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


