# GoogleIdentityStsV1IntrospectTokenRequest

Request message for IntrospectToken.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | **str** | Required. The OAuth 2.0 security token issued by the Security Token Service API. | [optional] 
**token_type_hint** | **str** | Optional. The type of the given token. Supported values are &#x60;urn:ietf:params:oauth:token-type:access_token&#x60; and &#x60;access_token&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_identity_sts_v1_introspect_token_request import GoogleIdentityStsV1IntrospectTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIdentityStsV1IntrospectTokenRequest from a JSON string
google_identity_sts_v1_introspect_token_request_instance = GoogleIdentityStsV1IntrospectTokenRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleIdentityStsV1IntrospectTokenRequest.to_json())

# convert the object into a dict
google_identity_sts_v1_introspect_token_request_dict = google_identity_sts_v1_introspect_token_request_instance.to_dict()
# create an instance of GoogleIdentityStsV1IntrospectTokenRequest from a dict
google_identity_sts_v1_introspect_token_request_from_dict = GoogleIdentityStsV1IntrospectTokenRequest.from_dict(google_identity_sts_v1_introspect_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


