# Authentication

`Authentication` defines the authentication configuration for API methods provided by an API service. Example: name: calendar.googleapis.com authentication: providers: - id: google_calendar_auth jwks_uri: https://www.googleapis.com/oauth2/v1/certs issuer: https://securetoken.google.com rules: - selector: \"*\" requirements: provider_id: google_calendar_auth - selector: google.calendar.Delegate oauth: canonical_scopes: https://www.googleapis.com/auth/calendar.read

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**providers** | [**List[AuthProvider]**](AuthProvider.md) | Defines a set of authentication providers that a service supports. | [optional] 
**rules** | [**List[AuthenticationRule]**](AuthenticationRule.md) | A list of authentication rules that apply to individual API methods. **NOTE:** All service configuration rules follow \&quot;last one wins\&quot; order. | [optional] 

## Example

```python
from openapi_client.models.authentication import Authentication

# TODO update the JSON string below
json = "{}"
# create an instance of Authentication from a JSON string
authentication_instance = Authentication.from_json(json)
# print the JSON string representation of the object
print(Authentication.to_json())

# convert the object into a dict
authentication_dict = authentication_instance.to_dict()
# create an instance of Authentication from a dict
authentication_from_dict = Authentication.from_dict(authentication_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


