# SignBlobRequest

Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The service account sign blob request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bytes_to_sign** | **bytearray** | Required. Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The bytes to sign. | [optional] 

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


