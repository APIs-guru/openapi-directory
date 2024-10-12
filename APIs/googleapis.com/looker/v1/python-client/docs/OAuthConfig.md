# OAuthConfig

Looker instance OAuth login settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Input only. Client ID from an external OAuth application. This is an input-only field, and thus will not be set in any responses. | [optional] 
**client_secret** | **str** | Input only. Client secret from an external OAuth application. This is an input-only field, and thus will not be set in any responses. | [optional] 

## Example

```python
from openapi_client.models.o_auth_config import OAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of OAuthConfig from a JSON string
o_auth_config_instance = OAuthConfig.from_json(json)
# print the JSON string representation of the object
print(OAuthConfig.to_json())

# convert the object into a dict
o_auth_config_dict = o_auth_config_instance.to_dict()
# create an instance of OAuthConfig from a dict
o_auth_config_from_dict = OAuthConfig.from_dict(o_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


