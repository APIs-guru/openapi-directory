# GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaims

JWT claims used for the jwt-bearer authorization grant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audience** | **str** | Value for the \&quot;aud\&quot; claim. | [optional] 
**issuer** | **str** | Value for the \&quot;iss\&quot; claim. | [optional] 
**subject** | **str** | Value for the \&quot;sub\&quot; claim. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_connectors_v1_auth_config_oauth2_jwt_bearer_jwt_claims import GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaims

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaims from a JSON string
google_cloud_connectors_v1_auth_config_oauth2_jwt_bearer_jwt_claims_instance = GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaims.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaims.to_json())

# convert the object into a dict
google_cloud_connectors_v1_auth_config_oauth2_jwt_bearer_jwt_claims_dict = google_cloud_connectors_v1_auth_config_oauth2_jwt_bearer_jwt_claims_instance.to_dict()
# create an instance of GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaims from a dict
google_cloud_connectors_v1_auth_config_oauth2_jwt_bearer_jwt_claims_from_dict = GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaims.from_dict(google_cloud_connectors_v1_auth_config_oauth2_jwt_bearer_jwt_claims_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


