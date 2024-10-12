# GenerateUploadUrlRequest

Request of `GenerateSourceUploadUrl` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kms_key_name** | **str** | Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function source code objects in intermediate Cloud Storage buckets. When you generate an upload url and upload your source code, it gets copied to an intermediate Cloud Storage bucket. The source code is then copied to a versioned directory in the sources bucket in the consumer project during the function deployment. It must match the pattern &#x60;projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}&#x60;. The Google Cloud Functions service account (service-{project_number}@gcf-admin-robot.iam.gserviceaccount.com) must be granted the role &#39;Cloud KMS CryptoKey Encrypter/Decrypter (roles/cloudkms.cryptoKeyEncrypterDecrypter)&#39; on the Key/KeyRing/Project/Organization (least access preferred). GCF will delegate access to the Google Storage service account in the internal project. | [optional] 

## Example

```python
from openapi_client.models.generate_upload_url_request import GenerateUploadUrlRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateUploadUrlRequest from a JSON string
generate_upload_url_request_instance = GenerateUploadUrlRequest.from_json(json)
# print the JSON string representation of the object
print(GenerateUploadUrlRequest.to_json())

# convert the object into a dict
generate_upload_url_request_dict = generate_upload_url_request_instance.to_dict()
# create an instance of GenerateUploadUrlRequest from a dict
generate_upload_url_request_from_dict = GenerateUploadUrlRequest.from_dict(generate_upload_url_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


