# OAuthSettings

Configuration for OAuth login&consent flow behavior as well as for OAuth Credentials.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**login_hint** | **str** | Domain hint to send as hd&#x3D;? parameter in OAuth request flow. Enables redirect to primary IDP by skipping Google&#39;s login screen. https://developers.google.com/identity/protocols/OpenIDConnect#hd-param Note: IAP does not verify that the id token&#39;s hd claim matches this value since access behavior is managed by IAM policies. | [optional] 
**programmatic_clients** | **List[str]** | List of client ids allowed to use IAP programmatically. | [optional] 

## Example

```python
from openapi_client.models.o_auth_settings import OAuthSettings

# TODO update the JSON string below
json = "{}"
# create an instance of OAuthSettings from a JSON string
o_auth_settings_instance = OAuthSettings.from_json(json)
# print the JSON string representation of the object
print(OAuthSettings.to_json())

# convert the object into a dict
o_auth_settings_dict = o_auth_settings_instance.to_dict()
# create an instance of OAuthSettings from a dict
o_auth_settings_from_dict = OAuthSettings.from_dict(o_auth_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


