# TokenActivationMethodsRequestSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token_activation_methods_request** | [**TokenActivationMethodsRequest**](TokenActivationMethodsRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.token_activation_methods_request_schema import TokenActivationMethodsRequestSchema

# TODO update the JSON string below
json = "{}"
# create an instance of TokenActivationMethodsRequestSchema from a JSON string
token_activation_methods_request_schema_instance = TokenActivationMethodsRequestSchema.from_json(json)
# print the JSON string representation of the object
print(TokenActivationMethodsRequestSchema.to_json())

# convert the object into a dict
token_activation_methods_request_schema_dict = token_activation_methods_request_schema_instance.to_dict()
# create an instance of TokenActivationMethodsRequestSchema from a dict
token_activation_methods_request_schema_from_dict = TokenActivationMethodsRequestSchema.from_dict(token_activation_methods_request_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


