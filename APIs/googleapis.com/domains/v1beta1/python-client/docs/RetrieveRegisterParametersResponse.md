# RetrieveRegisterParametersResponse

Response for the `RetrieveRegisterParameters` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**register_parameters** | [**RegisterParameters**](RegisterParameters.md) |  | [optional] 

## Example

```python
from openapi_client.models.retrieve_register_parameters_response import RetrieveRegisterParametersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RetrieveRegisterParametersResponse from a JSON string
retrieve_register_parameters_response_instance = RetrieveRegisterParametersResponse.from_json(json)
# print the JSON string representation of the object
print(RetrieveRegisterParametersResponse.to_json())

# convert the object into a dict
retrieve_register_parameters_response_dict = retrieve_register_parameters_response_instance.to_dict()
# create an instance of RetrieveRegisterParametersResponse from a dict
retrieve_register_parameters_response_from_dict = RetrieveRegisterParametersResponse.from_dict(retrieve_register_parameters_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


