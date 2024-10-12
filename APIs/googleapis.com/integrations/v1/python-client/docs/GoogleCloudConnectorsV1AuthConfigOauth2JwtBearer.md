# GoogleCloudConnectorsV1AuthConfigOauth2JwtBearer

Parameters to support JSON Web Token (JWT) Profile for Oauth 2.0 Authorization Grant based authentication. See https://tools.ietf.org/html/rfc7523 for more details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_key** | [**GoogleCloudConnectorsV1Secret**](GoogleCloudConnectorsV1Secret.md) |  | [optional] 
**jwt_claims** | [**GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaims**](GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaims.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_connectors_v1_auth_config_oauth2_jwt_bearer import GoogleCloudConnectorsV1AuthConfigOauth2JwtBearer

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudConnectorsV1AuthConfigOauth2JwtBearer from a JSON string
google_cloud_connectors_v1_auth_config_oauth2_jwt_bearer_instance = GoogleCloudConnectorsV1AuthConfigOauth2JwtBearer.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudConnectorsV1AuthConfigOauth2JwtBearer.to_json())

# convert the object into a dict
google_cloud_connectors_v1_auth_config_oauth2_jwt_bearer_dict = google_cloud_connectors_v1_auth_config_oauth2_jwt_bearer_instance.to_dict()
# create an instance of GoogleCloudConnectorsV1AuthConfigOauth2JwtBearer from a dict
google_cloud_connectors_v1_auth_config_oauth2_jwt_bearer_from_dict = GoogleCloudConnectorsV1AuthConfigOauth2JwtBearer.from_dict(google_cloud_connectors_v1_auth_config_oauth2_jwt_bearer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


