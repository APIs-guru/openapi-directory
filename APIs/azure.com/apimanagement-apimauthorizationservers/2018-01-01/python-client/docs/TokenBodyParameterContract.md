# TokenBodyParameterContract

OAuth acquire token request body parameter (www-url-form-encoded).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | body parameter name. | 
**value** | **str** | body parameter value. | 

## Example

```python
from openapi_client.models.token_body_parameter_contract import TokenBodyParameterContract

# TODO update the JSON string below
json = "{}"
# create an instance of TokenBodyParameterContract from a JSON string
token_body_parameter_contract_instance = TokenBodyParameterContract.from_json(json)
# print the JSON string representation of the object
print(TokenBodyParameterContract.to_json())

# convert the object into a dict
token_body_parameter_contract_dict = token_body_parameter_contract_instance.to_dict()
# create an instance of TokenBodyParameterContract from a dict
token_body_parameter_contract_from_dict = TokenBodyParameterContract.from_dict(token_body_parameter_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


