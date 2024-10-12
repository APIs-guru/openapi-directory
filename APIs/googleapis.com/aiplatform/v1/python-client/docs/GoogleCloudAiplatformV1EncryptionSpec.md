# GoogleCloudAiplatformV1EncryptionSpec

Represents a customer-managed encryption key spec that can be applied to a top-level resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kms_key_name** | **str** | Required. The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource. Has the form: &#x60;projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key&#x60;. The key needs to be in the same region as where the compute resource is created. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_encryption_spec import GoogleCloudAiplatformV1EncryptionSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1EncryptionSpec from a JSON string
google_cloud_aiplatform_v1_encryption_spec_instance = GoogleCloudAiplatformV1EncryptionSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1EncryptionSpec.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_encryption_spec_dict = google_cloud_aiplatform_v1_encryption_spec_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1EncryptionSpec from a dict
google_cloud_aiplatform_v1_encryption_spec_from_dict = GoogleCloudAiplatformV1EncryptionSpec.from_dict(google_cloud_aiplatform_v1_encryption_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


