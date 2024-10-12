# Auth

This message defines request authentication attributes. Terminology is based on the JSON Web Token (JWT) standard, but the terms also correlate to concepts in other standards.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_levels** | **List[str]** | A list of access level resource names that allow resources to be accessed by authenticated requester. It is part of Secure GCP processing for the incoming request. An access level string has the format: \&quot;//{api_service_name}/accessPolicies/{policy_id}/accessLevels/{short_name}\&quot; Example: \&quot;//accesscontextmanager.googleapis.com/accessPolicies/MY_POLICY_ID/accessLevels/MY_LEVEL\&quot; | [optional] 
**audiences** | **List[str]** | The intended audience(s) for this authentication information. Reflects the audience (&#x60;aud&#x60;) claim within a JWT. The audience value(s) depends on the &#x60;issuer&#x60;, but typically include one or more of the following pieces of information: * The services intended to receive the credential. For example, [\&quot;https://pubsub.googleapis.com/\&quot;, \&quot;https://storage.googleapis.com/\&quot;]. * A set of service-based scopes. For example, [\&quot;https://www.googleapis.com/auth/cloud-platform\&quot;]. * The client id of an app, such as the Firebase project id for JWTs from Firebase Auth. Consult the documentation for the credential issuer to determine the information provided. | [optional] 
**claims** | **Dict[str, object]** | Structured claims presented with the credential. JWTs include &#x60;{key: value}&#x60; pairs for standard and private claims. The following is a subset of the standard required and optional claims that would typically be presented for a Google-based JWT: {&#39;iss&#39;: &#39;accounts.google.com&#39;, &#39;sub&#39;: &#39;113289723416554971153&#39;, &#39;aud&#39;: [&#39;123456789012&#39;, &#39;pubsub.googleapis.com&#39;], &#39;azp&#39;: &#39;123456789012.apps.googleusercontent.com&#39;, &#39;email&#39;: &#39;jsmith@example.com&#39;, &#39;iat&#39;: 1353601026, &#39;exp&#39;: 1353604926} SAML assertions are similarly specified, but with an identity provider dependent structure. | [optional] 
**presenter** | **str** | The authorized presenter of the credential. Reflects the optional Authorized Presenter (&#x60;azp&#x60;) claim within a JWT or the OAuth client id. For example, a Google Cloud Platform client id looks as follows: \&quot;123456789012.apps.googleusercontent.com\&quot;. | [optional] 
**principal** | **str** | The authenticated principal. Reflects the issuer (&#x60;iss&#x60;) and subject (&#x60;sub&#x60;) claims within a JWT. The issuer and subject should be &#x60;/&#x60; delimited, with &#x60;/&#x60; percent-encoded within the subject fragment. For Google accounts, the principal format is: \&quot;https://accounts.google.com/{id}\&quot; | [optional] 

## Example

```python
from openapi_client.models.auth import Auth

# TODO update the JSON string below
json = "{}"
# create an instance of Auth from a JSON string
auth_instance = Auth.from_json(json)
# print the JSON string representation of the object
print(Auth.to_json())

# convert the object into a dict
auth_dict = auth_instance.to_dict()
# create an instance of Auth from a dict
auth_from_dict = Auth.from_dict(auth_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


