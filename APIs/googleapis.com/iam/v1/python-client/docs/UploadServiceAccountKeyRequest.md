# UploadServiceAccountKeyRequest

The service account key upload request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**public_key_data** | **bytearray** | The public key to associate with the service account. Must be an RSA public key that is wrapped in an X.509 v3 certificate. Include the first line, &#x60;-----BEGIN CERTIFICATE-----&#x60;, and the last line, &#x60;-----END CERTIFICATE-----&#x60;. | [optional] 

## Example

```python
from openapi_client.models.upload_service_account_key_request import UploadServiceAccountKeyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UploadServiceAccountKeyRequest from a JSON string
upload_service_account_key_request_instance = UploadServiceAccountKeyRequest.from_json(json)
# print the JSON string representation of the object
print(UploadServiceAccountKeyRequest.to_json())

# convert the object into a dict
upload_service_account_key_request_dict = upload_service_account_key_request_instance.to_dict()
# create an instance of UploadServiceAccountKeyRequest from a dict
upload_service_account_key_request_from_dict = UploadServiceAccountKeyRequest.from_dict(upload_service_account_key_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


