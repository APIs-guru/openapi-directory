# CustomerManagedEncryption

Configuration for encrypting secret payloads using customer-managed encryption keys (CMEK).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kms_key_name** | **str** | Required. The resource name of the Cloud KMS CryptoKey used to encrypt secret payloads. For secrets using the UserManaged replication policy type, Cloud KMS CryptoKeys must reside in the same location as the replica location. For secrets using the Automatic replication policy type, Cloud KMS CryptoKeys must reside in &#x60;global&#x60;. The expected format is &#x60;projects/*/locations/*/keyRings/*/cryptoKeys/*&#x60;. | [optional] 

## Example

```python
from openapi_client.models.customer_managed_encryption import CustomerManagedEncryption

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerManagedEncryption from a JSON string
customer_managed_encryption_instance = CustomerManagedEncryption.from_json(json)
# print the JSON string representation of the object
print(CustomerManagedEncryption.to_json())

# convert the object into a dict
customer_managed_encryption_dict = customer_managed_encryption_instance.to_dict()
# create an instance of CustomerManagedEncryption from a dict
customer_managed_encryption_from_dict = CustomerManagedEncryption.from_dict(customer_managed_encryption_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


