# SignBlobResponse

Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The service account sign blob response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_id** | **str** | Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The id of the key used to sign the blob. | [optional] 
**signature** | **bytearray** | Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The signed blob. | [optional] 

## Example

```python
from openapi_client.models.sign_blob_response import SignBlobResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SignBlobResponse from a JSON string
sign_blob_response_instance = SignBlobResponse.from_json(json)
# print the JSON string representation of the object
print(SignBlobResponse.to_json())

# convert the object into a dict
sign_blob_response_dict = sign_blob_response_instance.to_dict()
# create an instance of SignBlobResponse from a dict
sign_blob_response_from_dict = SignBlobResponse.from_dict(sign_blob_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


