# Tokens

JSON response template for List tokens operation in Directory API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of the resource. | [optional] 
**items** | [**List[Token]**](Token.md) | A list of Token resources. | [optional] 
**kind** | **str** | The type of the API resource. This is always &#x60;admin#directory#tokenList&#x60;. | [optional] [default to 'admin#directory#tokenList']

## Example

```python
from openapi_client.models.tokens import Tokens

# TODO update the JSON string below
json = "{}"
# create an instance of Tokens from a JSON string
tokens_instance = Tokens.from_json(json)
# print the JSON string representation of the object
print(Tokens.to_json())

# convert the object into a dict
tokens_dict = tokens_instance.to_dict()
# create an instance of Tokens from a dict
tokens_from_dict = Tokens.from_dict(tokens_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


