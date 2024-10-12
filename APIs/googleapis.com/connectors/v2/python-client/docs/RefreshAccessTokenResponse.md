# RefreshAccessTokenResponse

RefreshAccessTokenResponse includes the returned access token and its associated credentials.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_credentials** | [**AccessCredentials**](AccessCredentials.md) |  | [optional] 

## Example

```python
from openapi_client.models.refresh_access_token_response import RefreshAccessTokenResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RefreshAccessTokenResponse from a JSON string
refresh_access_token_response_instance = RefreshAccessTokenResponse.from_json(json)
# print the JSON string representation of the object
print(RefreshAccessTokenResponse.to_json())

# convert the object into a dict
refresh_access_token_response_dict = refresh_access_token_response_instance.to_dict()
# create an instance of RefreshAccessTokenResponse from a dict
refresh_access_token_response_from_dict = RefreshAccessTokenResponse.from_dict(refresh_access_token_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


