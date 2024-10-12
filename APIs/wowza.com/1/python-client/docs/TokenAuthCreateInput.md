# TokenAuthCreateInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token_auth** | [**TokenAuth1**](TokenAuth1.md) |  | 

## Example

```python
from openapi_client.models.token_auth_create_input import TokenAuthCreateInput

# TODO update the JSON string below
json = "{}"
# create an instance of TokenAuthCreateInput from a JSON string
token_auth_create_input_instance = TokenAuthCreateInput.from_json(json)
# print the JSON string representation of the object
print(TokenAuthCreateInput.to_json())

# convert the object into a dict
token_auth_create_input_dict = token_auth_create_input_instance.to_dict()
# create an instance of TokenAuthCreateInput from a dict
token_auth_create_input_from_dict = TokenAuthCreateInput.from_dict(token_auth_create_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


