# ObjectCustomerEncryption

Metadata of customer-supplied encryption key, if the object is encrypted by such a key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryption_algorithm** | **str** | The encryption algorithm. | [optional] 
**key_sha256** | **str** | SHA256 hash value of the encryption key. | [optional] 

## Example

```python
from openapi_client.models.object_customer_encryption import ObjectCustomerEncryption

# TODO update the JSON string below
json = "{}"
# create an instance of ObjectCustomerEncryption from a JSON string
object_customer_encryption_instance = ObjectCustomerEncryption.from_json(json)
# print the JSON string representation of the object
print(ObjectCustomerEncryption.to_json())

# convert the object into a dict
object_customer_encryption_dict = object_customer_encryption_instance.to_dict()
# create an instance of ObjectCustomerEncryption from a dict
object_customer_encryption_from_dict = ObjectCustomerEncryption.from_dict(object_customer_encryption_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


