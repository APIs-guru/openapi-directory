# TokenResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Response code for the message. It can be ignored. | [optional] 
**message** | **str** | Response message with any hints as to what might have gone wrong, if something went wrong. | [optional] 
**token** | **str** | The token representing the credit card number that you will send to Beanstream for purchases. You will always receive a token, even if the request data is wrong or the card is invalid. | 
**version** | **int** | Message version number. Can be ignored. | [optional] 

## Example

```python
from openapi_client.models.token_response import TokenResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TokenResponse from a JSON string
token_response_instance = TokenResponse.from_json(json)
# print the JSON string representation of the object
print(TokenResponse.to_json())

# convert the object into a dict
token_response_dict = token_response_instance.to_dict()
# create an instance of TokenResponse from a dict
token_response_from_dict = TokenResponse.from_dict(token_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


