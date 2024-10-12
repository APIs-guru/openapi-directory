# GenerateAccessTokenRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delegates** | **List[str]** | The sequence of service accounts in a delegation chain. This field is required for [delegated requests](https://cloud.google.com/iam/help/credentials/delegated-request). For [direct requests](https://cloud.google.com/iam/help/credentials/direct-request), which are more common, do not specify this field. Each service account must be granted the &#x60;roles/iam.serviceAccountTokenCreator&#x60; role on its next service account in the chain. The last service account in the chain must be granted the &#x60;roles/iam.serviceAccountTokenCreator&#x60; role on the service account that is specified in the &#x60;name&#x60; field of the request. The delegates must have the following format: &#x60;projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}&#x60;. The &#x60;-&#x60; wildcard character is required; replacing it with a project ID is invalid. | [optional] 
**lifetime** | **str** | The desired lifetime duration of the access token in seconds. By default, the maximum allowed value is 1 hour. To set a lifetime of up to 12 hours, you can add the service account as an allowed value in an Organization Policy that enforces the &#x60;constraints/iam.allowServiceAccountCredentialLifetimeExtension&#x60; constraint. See detailed instructions at https://cloud.google.com/iam/help/credentials/lifetime If a value is not specified, the token&#39;s lifetime will be set to a default value of 1 hour. | [optional] 
**scope** | **List[str]** | Required. Code to identify the scopes to be included in the OAuth 2.0 access token. See https://developers.google.com/identity/protocols/googlescopes for more information. At least one value required. | [optional] 

## Example

```python
from openapi_client.models.generate_access_token_request import GenerateAccessTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateAccessTokenRequest from a JSON string
generate_access_token_request_instance = GenerateAccessTokenRequest.from_json(json)
# print the JSON string representation of the object
print(GenerateAccessTokenRequest.to_json())

# convert the object into a dict
generate_access_token_request_dict = generate_access_token_request_instance.to_dict()
# create an instance of GenerateAccessTokenRequest from a dict
generate_access_token_request_from_dict = GenerateAccessTokenRequest.from_dict(generate_access_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


