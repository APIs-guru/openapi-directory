# SignJwtRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delegates** | **List[str]** | The sequence of service accounts in a delegation chain. Each service account must be granted the &#x60;roles/iam.serviceAccountTokenCreator&#x60; role on its next service account in the chain. The last service account in the chain must be granted the &#x60;roles/iam.serviceAccountTokenCreator&#x60; role on the service account that is specified in the &#x60;name&#x60; field of the request. The delegates must have the following format: &#x60;projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}&#x60;. The &#x60;-&#x60; wildcard character is required; replacing it with a project ID is invalid. | [optional] 
**payload** | **str** | Required. The JWT payload to sign. Must be a serialized JSON object that contains a JWT Claims Set. For example: &#x60;{\&quot;sub\&quot;: \&quot;user@example.com\&quot;, \&quot;iat\&quot;: 313435}&#x60; If the JWT Claims Set contains an expiration time (&#x60;exp&#x60;) claim, it must be an integer timestamp that is not in the past and no more than 12 hours in the future. | [optional] 

## Example

```python
from openapi_client.models.sign_jwt_request import SignJwtRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SignJwtRequest from a JSON string
sign_jwt_request_instance = SignJwtRequest.from_json(json)
# print the JSON string representation of the object
print(SignJwtRequest.to_json())

# convert the object into a dict
sign_jwt_request_dict = sign_jwt_request_instance.to_dict()
# create an instance of SignJwtRequest from a dict
sign_jwt_request_from_dict = SignJwtRequest.from_dict(sign_jwt_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


