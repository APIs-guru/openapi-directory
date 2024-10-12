# GoogleCloudMlV1EncryptionConfig

Represents a custom encryption key configuration that can be applied to a resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kms_key_name** | **str** | The Cloud KMS resource identifier of the customer-managed encryption key used to protect a resource, such as a training job. It has the following format: &#x60;projects/{PROJECT_ID}/locations/{REGION}/keyRings/{KEY_RING_NAME}/cryptoKeys/{KEY_NAME}&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_encryption_config import GoogleCloudMlV1EncryptionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1EncryptionConfig from a JSON string
google_cloud_ml_v1_encryption_config_instance = GoogleCloudMlV1EncryptionConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1EncryptionConfig.to_json())

# convert the object into a dict
google_cloud_ml_v1_encryption_config_dict = google_cloud_ml_v1_encryption_config_instance.to_dict()
# create an instance of GoogleCloudMlV1EncryptionConfig from a dict
google_cloud_ml_v1_encryption_config_from_dict = GoogleCloudMlV1EncryptionConfig.from_dict(google_cloud_ml_v1_encryption_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


