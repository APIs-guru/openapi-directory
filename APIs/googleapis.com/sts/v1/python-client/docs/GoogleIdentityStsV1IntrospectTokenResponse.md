# GoogleIdentityStsV1IntrospectTokenResponse

Response message for IntrospectToken.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | A boolean value that indicates whether the provided access token is currently active. | [optional] 
**client_id** | **str** | The client identifier for the OAuth 2.0 client that requested the provided token. | [optional] 
**exp** | **str** | The expiration timestamp, measured in the number of seconds since January 1 1970 UTC, indicating when this token will expire. | [optional] 
**iat** | **str** | The issued timestamp, measured in the number of seconds since January 1 1970 UTC, indicating when this token was originally issued. | [optional] 
**iss** | **str** | The issuer of the provided token. | [optional] 
**scope** | **str** | A list of scopes associated with the provided token. | [optional] 
**sub** | **str** | The unique user ID associated with the provided token. For Google Accounts, this value is based on the Google Account&#39;s user ID. For federated identities, this value is based on the identity pool ID and the value of the mapped &#x60;google.subject&#x60; attribute. | [optional] 
**username** | **str** | The human-readable identifier for the token principal subject. For example, if the provided token is associated with a workload identity pool, this field contains a value in the following format: &#x60;principal://iam.googleapis.com/projects//locations/global/workloadIdentityPools//subject/&#x60;. If the provided token is associated with a workforce pool, this field contains a value in the following format: &#x60;principal://iam.googleapis.com/locations/global/workforcePools//subject/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_identity_sts_v1_introspect_token_response import GoogleIdentityStsV1IntrospectTokenResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIdentityStsV1IntrospectTokenResponse from a JSON string
google_identity_sts_v1_introspect_token_response_instance = GoogleIdentityStsV1IntrospectTokenResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleIdentityStsV1IntrospectTokenResponse.to_json())

# convert the object into a dict
google_identity_sts_v1_introspect_token_response_dict = google_identity_sts_v1_introspect_token_response_instance.to_dict()
# create an instance of GoogleIdentityStsV1IntrospectTokenResponse from a dict
google_identity_sts_v1_introspect_token_response_from_dict = GoogleIdentityStsV1IntrospectTokenResponse.from_dict(google_identity_sts_v1_introspect_token_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


