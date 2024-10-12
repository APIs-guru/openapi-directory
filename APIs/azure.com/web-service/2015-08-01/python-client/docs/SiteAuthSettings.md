# SiteAuthSettings

Configuration settings for the Azure App Service Authentication / Authorization feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aad_client_id** | **str** |  | [optional] 
**additional_login_params** | **List[str]** | Gets or sets a list of login parameters to send to the OpenID Connect authorization endpoint when              a user logs in. Each parameter must be in the form \&quot;key&#x3D;value\&quot;. | [optional] 
**allowed_audiences** | **List[str]** | Gets or sets a list of allowed audience values to consider when validating JWTs issued by               Azure Active Directory. Note that the {Microsoft.Web.Hosting.Administration.SiteAuthSettings.ClientId} value is always considered an              allowed audience, regardless of this setting. | [optional] 
**allowed_external_redirect_urls** | **List[str]** | Gets or sets a collection of external URLs that can be redirected to as part of logging in              or logging out of the web app. Note that the query string part of the URL is ignored.              This is an advanced setting typically only needed by Windows Store application backends.              Note that URLs within the current domain are always implicitly allowed. | [optional] 
**client_id** | **str** | Gets or sets the Client ID of this relying party application, known as the client_id.              This setting is required for enabling OpenID Connection authentication with Azure Active Directory or               other 3rd party OpenID Connect providers.              More information on OpenID Connect: http://openid.net/specs/openid-connect-core-1_0.html | [optional] 
**client_secret** | **str** | Gets or sets the Client Secret of this relying party application (in Azure Active Directory, this is also referred to as the Key).              This setting is optional. If no client secret is configured, the OpenID Connect implicit auth flow is used to authenticate end users.              Otherwise, the OpenID Connect Authorization Code Flow is used to authenticate end users.              More information on OpenID Connect: http://openid.net/specs/openid-connect-core-1_0.html | [optional] 
**default_provider** | **str** | Gets or sets the default authentication provider to use when multiple providers are configured.              This setting is only needed if multiple providers are configured and the unauthenticated client              action is set to \&quot;RedirectToLoginPage\&quot;. | [optional] 
**enabled** | **bool** | Gets or sets a value indicating whether the Authentication / Authorization feature is enabled for the current app. | [optional] 
**facebook_app_id** | **str** | Gets or sets the App ID of the Facebook app used for login.              This setting is required for enabling Facebook Login.              Facebook Login documentation: https://developers.facebook.com/docs/facebook-login | [optional] 
**facebook_app_secret** | **str** | Gets or sets the App Secret of the Facebook app used for Facebook Login.              This setting is required for enabling Facebook Login.              Facebook Login documentation: https://developers.facebook.com/docs/facebook-login | [optional] 
**facebook_o_auth_scopes** | **List[str]** | Gets or sets the OAuth 2.0 scopes that will be requested as part of Facebook Login authentication.              This setting is optional.              Facebook Login documentation: https://developers.facebook.com/docs/facebook-login | [optional] 
**google_client_id** | **str** | Gets or sets the OpenID Connect Client ID for the Google web application.              This setting is required for enabling Google Sign-In.              Google Sign-In documentation: https://developers.google.com/identity/sign-in/web/ | [optional] 
**google_client_secret** | **str** | Gets or sets the client secret associated with the Google web application.              This setting is required for enabling Google Sign-In.              Google Sign-In documentation: https://developers.google.com/identity/sign-in/web/ | [optional] 
**google_o_auth_scopes** | **List[str]** | Gets or sets the OAuth 2.0 scopes that will be requested as part of Google Sign-In authentication.              This setting is optional. If not specified, \&quot;openid\&quot;, \&quot;profile\&quot;, and \&quot;email\&quot; are used as default scopes.              Google Sign-In documentation: https://developers.google.com/identity/sign-in/web/ | [optional] 
**http_api_prefix_path** | **str** | Gets or sets the relative path prefix used by platform HTTP APIs.              Changing this value is not recommended except for compatibility reasons. | [optional] 
**issuer** | **str** | Gets or sets the OpenID Connect Issuer URI that represents the entity which issues access tokens for this application.              When using Azure Active Directory, this value is the URI of the directory tenant, e.g. https://sts.windows.net/{tenant-guid}/.              This URI is a case-sensitive identifier for the token issuer.              More information on OpenID Connect Discovery: http://openid.net/specs/openid-connect-discovery-1_0.html | [optional] 
**microsoft_account_client_id** | **str** | Gets or sets the OAuth 2.0 client ID that was created for the app used for authentication.              This setting is required for enabling Microsoft Account authentication.              Microsoft Account OAuth documentation: https://dev.onedrive.com/auth/msa_oauth.htm | [optional] 
**microsoft_account_client_secret** | **str** | Gets or sets the OAuth 2.0 client secret that was created for the app used for authentication.              This setting is required for enabling Microsoft Account authentication.              Microsoft Account OAuth documentation: https://dev.onedrive.com/auth/msa_oauth.htm | [optional] 
**microsoft_account_o_auth_scopes** | **List[str]** | Gets or sets the OAuth 2.0 scopes that will be requested as part of Microsoft Account authentication.              This setting is optional. If not specified, \&quot;wl.basic\&quot; is used as the default scope.              Microsoft Account Scopes and permissions documentation: https://msdn.microsoft.com/en-us/library/dn631845.aspx | [optional] 
**open_id_issuer** | **str** |  | [optional] 
**token_refresh_extension_hours** | **float** | Gets or sets the number of hours after session token expiration that a session token can be used to              call the token refresh API. The default is 72 hours. | [optional] 
**token_store_enabled** | **bool** | Gets or sets a value indicating whether to durably store platform-specific security tokens              obtained during login flows. This capability is disabled by default. | [optional] 
**twitter_consumer_key** | **str** | Gets or sets the OAuth 1.0a consumer key of the Twitter application used for sign-in.              This setting is required for enabling Twitter Sign-In.              Twitter Sign-In documentation: https://dev.twitter.com/web/sign-in | [optional] 
**twitter_consumer_secret** | **str** | Gets or sets the OAuth 1.0a consumer secret of the Twitter application used for sign-in.              This setting is required for enabling Twitter Sign-In.              Twitter Sign-In documentation: https://dev.twitter.com/web/sign-in | [optional] 
**unauthenticated_client_action** | **str** | Gets or sets the action to take when an unauthenticated client attempts to access the app. | [optional] 

## Example

```python
from openapi_client.models.site_auth_settings import SiteAuthSettings

# TODO update the JSON string below
json = "{}"
# create an instance of SiteAuthSettings from a JSON string
site_auth_settings_instance = SiteAuthSettings.from_json(json)
# print the JSON string representation of the object
print(SiteAuthSettings.to_json())

# convert the object into a dict
site_auth_settings_dict = site_auth_settings_instance.to_dict()
# create an instance of SiteAuthSettings from a dict
site_auth_settings_from_dict = SiteAuthSettings.from_dict(site_auth_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


