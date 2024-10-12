# CustomerEncryptionKey

Customer's encryption key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kms_key_name** | **str** | The name of the encryption key that is stored in Google Cloud KMS. For example: \&quot;kmsKeyName\&quot;: \&quot;projects/kms_project_id/locations/region/keyRings/ key_region/cryptoKeys/key The fully-qualifed key name may be returned for resource GET requests. For example: \&quot;kmsKeyName\&quot;: \&quot;projects/kms_project_id/locations/region/keyRings/ key_region/cryptoKeys/key /cryptoKeyVersions/1  | [optional] 

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


