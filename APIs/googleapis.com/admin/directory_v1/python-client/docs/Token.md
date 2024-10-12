# Token

JSON template for token resource in Directory API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**anonymous** | **bool** | Whether the application is registered with Google. The value is &#x60;true&#x60; if the application has an anonymous Client ID. | [optional] 
**client_id** | **str** | The Client ID of the application the token is issued to. | [optional] 
**display_text** | **str** | The displayable name of the application the token is issued to. | [optional] 
**etag** | **str** | ETag of the resource. | [optional] 
**kind** | **str** | The type of the API resource. This is always &#x60;admin#directory#token&#x60;. | [optional] [default to 'admin#directory#token']
**native_app** | **bool** | Whether the token is issued to an installed application. The value is &#x60;true&#x60; if the application is installed to a desktop or mobile device. | [optional] 
**scopes** | **List[str]** | A list of authorization scopes the application is granted. | [optional] 
**user_key** | **str** | The unique ID of the user that issued the token. | [optional] 

## Example

```python
from openapi_client.models.token import Token

# TODO update the JSON string below
json = "{}"
# create an instance of Token from a JSON string
token_instance = Token.from_json(json)
# print the JSON string representation of the object
print(Token.to_json())

# convert the object into a dict
token_dict = token_instance.to_dict()
# create an instance of Token from a dict
token_from_dict = Token.from_dict(token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


