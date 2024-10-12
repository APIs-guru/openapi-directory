# AuthProvider

Configuration for an authentication provider, including support for [JSON Web Token (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audiences** | **str** | The list of JWT [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3). that are allowed to access. A JWT containing any of these audiences will be accepted. When this setting is absent, JWTs with audiences: - \&quot;https://[service.name]/[google.protobuf.Api.name]\&quot; - \&quot;https://[service.name]/\&quot; will be accepted. For example, if no audiences are in the setting, LibraryService API will accept JWTs with the following audiences: - https://library-example.googleapis.com/google.example.library.v1.LibraryService - https://library-example.googleapis.com/ Example: audiences: bookstore_android.apps.googleusercontent.com, bookstore_web.apps.googleusercontent.com | [optional] 
**authorization_url** | **str** | Redirect URL if JWT token is required but not present or is expired. Implement authorizationUrl of securityDefinitions in OpenAPI spec. | [optional] 
**id** | **str** | The unique identifier of the auth provider. It will be referred to by &#x60;AuthRequirement.provider_id&#x60;. Example: \&quot;bookstore_auth\&quot;. | [optional] 
**issuer** | **str** | Identifies the principal that issued the JWT. See https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.1 Usually a URL or an email address. Example: https://securetoken.google.com Example: 1234567-compute@developer.gserviceaccount.com | [optional] 
**jwks_uri** | **str** | URL of the provider&#39;s public key set to validate signature of the JWT. See [OpenID Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata). Optional if the key set document: - can be retrieved from [OpenID Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html) of the issuer. - can be inferred from the email domain of the issuer (e.g. a Google service account). Example: https://www.googleapis.com/oauth2/v1/certs | [optional] 
**jwt_locations** | [**List[JwtLocation]**](JwtLocation.md) | Defines the locations to extract the JWT. For now it is only used by the Cloud Endpoints to store the OpenAPI extension [x-google-jwt-locations] (https://cloud.google.com/endpoints/docs/openapi/openapi-extensions#x-google-jwt-locations) JWT locations can be one of HTTP headers, URL query parameters or cookies. The rule is that the first match wins. If not specified, default to use following 3 locations: 1) Authorization: Bearer 2) x-goog-iap-jwt-assertion 3) access_token query parameter Default locations can be specified as followings: jwt_locations: - header: Authorization value_prefix: \&quot;Bearer \&quot; - header: x-goog-iap-jwt-assertion - query: access_token | [optional] 

## Example

```python
from openapi_client.models.auth_provider import AuthProvider

# TODO update the JSON string below
json = "{}"
# create an instance of AuthProvider from a JSON string
auth_provider_instance = AuthProvider.from_json(json)
# print the JSON string representation of the object
print(AuthProvider.to_json())

# convert the object into a dict
auth_provider_dict = auth_provider_instance.to_dict()
# create an instance of AuthProvider from a dict
auth_provider_from_dict = AuthProvider.from_dict(auth_provider_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


