# TokenUpdateParameters

The parameters for updating a token.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TokenUpdateProperties**](TokenUpdateProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.token_update_parameters import TokenUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of TokenUpdateParameters from a JSON string
token_update_parameters_instance = TokenUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(TokenUpdateParameters.to_json())

# convert the object into a dict
token_update_parameters_dict = token_update_parameters_instance.to_dict()
# create an instance of TokenUpdateParameters from a dict
token_update_parameters_from_dict = TokenUpdateParameters.from_dict(token_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


