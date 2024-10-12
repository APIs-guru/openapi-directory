# ExchangeAuthCodeResponse

ExchangeAuthCodeResponse includes the returned access token and its associated credentials.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_credentials** | [**AccessCredentials**](AccessCredentials.md) |  | [optional] 

## Example

```python
from openapi_client.models.exchange_auth_code_response import ExchangeAuthCodeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ExchangeAuthCodeResponse from a JSON string
exchange_auth_code_response_instance = ExchangeAuthCodeResponse.from_json(json)
# print the JSON string representation of the object
print(ExchangeAuthCodeResponse.to_json())

# convert the object into a dict
exchange_auth_code_response_dict = exchange_auth_code_response_instance.to_dict()
# create an instance of ExchangeAuthCodeResponse from a dict
exchange_auth_code_response_from_dict = ExchangeAuthCodeResponse.from_dict(exchange_auth_code_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


