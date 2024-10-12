# Oidc

Represents an OpenId Connect 1.0 identity provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_audiences** | **List[str]** | Acceptable values for the &#x60;aud&#x60; field (audience) in the OIDC token. Token exchange requests are rejected if the token audience does not match one of the configured values. Each audience may be at most 256 characters. A maximum of 10 audiences may be configured. If this list is empty, the OIDC token audience must be equal to the full canonical resource name of the WorkloadIdentityPoolProvider, with or without the HTTPS prefix. For example: &#x60;&#x60;&#x60; //iam.googleapis.com/projects//locations//workloadIdentityPools//providers/ https://iam.googleapis.com/projects//locations//workloadIdentityPools//providers/ &#x60;&#x60;&#x60; | [optional] 
**issuer_uri** | **str** | Required. The OIDC issuer URL. Must be an HTTPS endpoint. | [optional] 
**jwks_json** | **str** | Optional. OIDC JWKs in JSON String format. For details on the definition of a JWK, see https://tools.ietf.org/html/rfc7517. If not set, the &#x60;jwks_uri&#x60; from the discovery document(fetched from the .well-known path of the &#x60;issuer_uri&#x60;) will be used. Currently, RSA and EC asymmetric keys are supported. The JWK must use following format and include only the following fields: { \&quot;keys\&quot;: [ { \&quot;kty\&quot;: \&quot;RSA/EC\&quot;, \&quot;alg\&quot;: \&quot;\&quot;, \&quot;use\&quot;: \&quot;sig\&quot;, \&quot;kid\&quot;: \&quot;\&quot;, \&quot;n\&quot;: \&quot;\&quot;, \&quot;e\&quot;: \&quot;\&quot;, \&quot;x\&quot;: \&quot;\&quot;, \&quot;y\&quot;: \&quot;\&quot;, \&quot;crv\&quot;: \&quot;\&quot; } ] } | [optional] 

## Example

```python
from openapi_client.models.oidc import Oidc

# TODO update the JSON string below
json = "{}"
# create an instance of Oidc from a JSON string
oidc_instance = Oidc.from_json(json)
# print the JSON string representation of the object
print(Oidc.to_json())

# convert the object into a dict
oidc_dict = oidc_instance.to_dict()
# create an instance of Oidc from a dict
oidc_from_dict = Oidc.from_dict(oidc_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


