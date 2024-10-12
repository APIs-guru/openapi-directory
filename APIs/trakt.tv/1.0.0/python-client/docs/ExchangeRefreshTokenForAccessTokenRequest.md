# ExchangeRefreshTokenForAccessTokenRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** |  | [optional] 
**client_secret** | **str** |  | [optional] 
**grant_type** | **str** |  | [optional] 
**redirect_uri** | **str** |  | [optional] 
**refresh_token** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.exchange_refresh_token_for_access_token_request import ExchangeRefreshTokenForAccessTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExchangeRefreshTokenForAccessTokenRequest from a JSON string
exchange_refresh_token_for_access_token_request_instance = ExchangeRefreshTokenForAccessTokenRequest.from_json(json)
# print the JSON string representation of the object
print(ExchangeRefreshTokenForAccessTokenRequest.to_json())

# convert the object into a dict
exchange_refresh_token_for_access_token_request_dict = exchange_refresh_token_for_access_token_request_instance.to_dict()
# create an instance of ExchangeRefreshTokenForAccessTokenRequest from a dict
exchange_refresh_token_for_access_token_request_from_dict = ExchangeRefreshTokenForAccessTokenRequest.from_dict(exchange_refresh_token_for_access_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


