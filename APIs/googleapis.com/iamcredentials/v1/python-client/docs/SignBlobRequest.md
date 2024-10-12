# SignBlobRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delegates** | **List[str]** | The sequence of service accounts in a delegation chain. Each service account must be granted the &#x60;roles/iam.serviceAccountTokenCreator&#x60; role on its next service account in the chain. The last service account in the chain must be granted the &#x60;roles/iam.serviceAccountTokenCreator&#x60; role on the service account that is specified in the &#x60;name&#x60; field of the request. The delegates must have the following format: &#x60;projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}&#x60;. The &#x60;-&#x60; wildcard character is required; replacing it with a project ID is invalid. | [optional] 
**payload** | **bytearray** | Required. The bytes to sign. | [optional] 

## Example

```python
from openapi_client.models.sign_blob_request import SignBlobRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SignBlobRequest from a JSON string
sign_blob_request_instance = SignBlobRequest.from_json(json)
# print the JSON string representation of the object
print(SignBlobRequest.to_json())

# convert the object into a dict
sign_blob_request_dict = sign_blob_request_instance.to_dict()
# create an instance of SignBlobRequest from a dict
sign_blob_request_from_dict = SignBlobRequest.from_dict(sign_blob_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


