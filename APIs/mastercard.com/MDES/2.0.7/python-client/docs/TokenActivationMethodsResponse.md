# TokenActivationMethodsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activation_methods** | [**ActivationMethods**](ActivationMethods.md) |  | [optional] 

## Example

```python
from openapi_client.models.token_activation_methods_response import TokenActivationMethodsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TokenActivationMethodsResponse from a JSON string
token_activation_methods_response_instance = TokenActivationMethodsResponse.from_json(json)
# print the JSON string representation of the object
print(TokenActivationMethodsResponse.to_json())

# convert the object into a dict
token_activation_methods_response_dict = token_activation_methods_response_instance.to_dict()
# create an instance of TokenActivationMethodsResponse from a dict
token_activation_methods_response_from_dict = TokenActivationMethodsResponse.from_dict(token_activation_methods_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


