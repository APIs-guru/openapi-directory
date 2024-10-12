# GenerateIdTokenRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audience** | **str** | Required. The audience for the token, such as the API or account that this token grants access to. | [optional] 
**delegates** | **List[str]** | The sequence of service accounts in a delegation chain. Each service account must be granted the &#x60;roles/iam.serviceAccountTokenCreator&#x60; role on its next service account in the chain. The last service account in the chain must be granted the &#x60;roles/iam.serviceAccountTokenCreator&#x60; role on the service account that is specified in the &#x60;name&#x60; field of the request. The delegates must have the following format: &#x60;projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}&#x60;. The &#x60;-&#x60; wildcard character is required; replacing it with a project ID is invalid. | [optional] 
**include_email** | **bool** | Include the service account email in the token. If set to &#x60;true&#x60;, the token will contain &#x60;email&#x60; and &#x60;email_verified&#x60; claims. | [optional] 

## Example

```python
from openapi_client.models.generate_id_token_request import GenerateIdTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateIdTokenRequest from a JSON string
generate_id_token_request_instance = GenerateIdTokenRequest.from_json(json)
# print the JSON string representation of the object
print(GenerateIdTokenRequest.to_json())

# convert the object into a dict
generate_id_token_request_dict = generate_id_token_request_instance.to_dict()
# create an instance of GenerateIdTokenRequest from a dict
generate_id_token_request_from_dict = GenerateIdTokenRequest.from_dict(generate_id_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


