# CustomerEncryptionKey

A customer-managed encryption key (CMEK) for the Compute Engine resources of the associated workstation configuration. Specify the name of your Cloud KMS encryption key and the default service account. We recommend that you use a separate service account and follow [Cloud KMS best practices](https://cloud.google.com/kms/docs/separation-of-duties).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kms_key** | **str** | Immutable. The name of the Google Cloud KMS encryption key. For example, &#x60;\&quot;projects/PROJECT_ID/locations/REGION/keyRings/KEY_RING/cryptoKeys/KEY_NAME\&quot;&#x60;. The key must be in the same region as the workstation configuration. | [optional] 
**kms_key_service_account** | **str** | Immutable. The service account to use with the specified KMS key. We recommend that you use a separate service account and follow KMS best practices. For more information, see [Separation of duties](https://cloud.google.com/kms/docs/separation-of-duties) and &#x60;gcloud kms keys add-iam-policy-binding&#x60; [&#x60;--member&#x60;](https://cloud.google.com/sdk/gcloud/reference/kms/keys/add-iam-policy-binding#--member). | [optional] 

## Example

```python
from openapi_client.models.customer_encryption_key import CustomerEncryptionKey

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerEncryptionKey from a JSON string
customer_encryption_key_instance = CustomerEncryptionKey.from_json(json)
# print the JSON string representation of the object
print(CustomerEncryptionKey.to_json())

# convert the object into a dict
customer_encryption_key_dict = customer_encryption_key_instance.to_dict()
# create an instance of CustomerEncryptionKey from a dict
customer_encryption_key_from_dict = CustomerEncryptionKey.from_dict(customer_encryption_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


