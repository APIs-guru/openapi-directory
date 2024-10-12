# BucketEncryption

Encryption configuration for a bucket.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_kms_key_name** | **str** | A Cloud KMS key that will be used to encrypt objects inserted into this bucket, if no encryption method is specified. | [optional] 

## Example

```python
from openapi_client.models.bucket_encryption import BucketEncryption

# TODO update the JSON string below
json = "{}"
# create an instance of BucketEncryption from a JSON string
bucket_encryption_instance = BucketEncryption.from_json(json)
# print the JSON string representation of the object
print(BucketEncryption.to_json())

# convert the object into a dict
bucket_encryption_dict = bucket_encryption_instance.to_dict()
# create an instance of BucketEncryption from a dict
bucket_encryption_from_dict = BucketEncryption.from_dict(bucket_encryption_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


