# JWKSAlgoSettings

Settings for a JWK set

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**headers** | **Dict[str, str]** | The headers for the http call | [optional] 
**kty** | **str** | The type of key: RSA or EC | [optional] 
**timeout** | **int** | The timeout of the http call | [optional] 
**ttl** | **int** | The ttl of the keyset | [optional] 
**type** | **str** | String with value JWKSAlgoSettings | 
**url** | **str** | The url for the http call | [optional] 

## Example

```python
from openapi_client.models.jwks_algo_settings import JWKSAlgoSettings

# TODO update the JSON string below
json = "{}"
# create an instance of JWKSAlgoSettings from a JSON string
jwks_algo_settings_instance = JWKSAlgoSettings.from_json(json)
# print the JSON string representation of the object
print(JWKSAlgoSettings.to_json())

# convert the object into a dict
jwks_algo_settings_dict = jwks_algo_settings_instance.to_dict()
# create an instance of JWKSAlgoSettings from a dict
jwks_algo_settings_from_dict = JWKSAlgoSettings.from_dict(jwks_algo_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


