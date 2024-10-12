# TokenAuthUpdateInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token_auth** | [**TokenAuth2**](TokenAuth2.md) |  | 

## Example

```python
from openapi_client.models.token_auth_update_input import TokenAuthUpdateInput

# TODO update the JSON string below
json = "{}"
# create an instance of TokenAuthUpdateInput from a JSON string
token_auth_update_input_instance = TokenAuthUpdateInput.from_json(json)
# print the JSON string representation of the object
print(TokenAuthUpdateInput.to_json())

# convert the object into a dict
token_auth_update_input_dict = token_auth_update_input_instance.to_dict()
# create an instance of TokenAuthUpdateInput from a dict
token_auth_update_input_from_dict = TokenAuthUpdateInput.from_dict(token_auth_update_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


