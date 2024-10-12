# CustomerManagedEncryptionStatus

Describes the status of customer-managed encryption.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kms_key_version_name** | **str** | Required. The resource name of the Cloud KMS CryptoKeyVersion used to encrypt the secret payload, in the following format: &#x60;projects/*/locations/*/keyRings/*/cryptoKeys/*/versions/*&#x60;. | [optional] 

## Example

```python
from openapi_client.models.customer_managed_encryption_status import CustomerManagedEncryptionStatus

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerManagedEncryptionStatus from a JSON string
customer_managed_encryption_status_instance = CustomerManagedEncryptionStatus.from_json(json)
# print the JSON string representation of the object
print(CustomerManagedEncryptionStatus.to_json())

# convert the object into a dict
customer_managed_encryption_status_dict = customer_managed_encryption_status_instance.to_dict()
# create an instance of CustomerManagedEncryptionStatus from a dict
customer_managed_encryption_status_from_dict = CustomerManagedEncryptionStatus.from_dict(customer_managed_encryption_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


