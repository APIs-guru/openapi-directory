# ProductSigningCertificate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_hash_sha1** | **str** | The base64 urlsafe encoded SHA1 hash of the certificate. (This field is deprecated in favor of SHA2-256. It should not be used and may be removed at any time.) | [optional] 
**certificate_hash_sha256** | **str** | The base64 urlsafe encoded SHA2-256 hash of the certificate. | [optional] 

## Example

```python
from openapi_client.models.product_signing_certificate import ProductSigningCertificate

# TODO update the JSON string below
json = "{}"
# create an instance of ProductSigningCertificate from a JSON string
product_signing_certificate_instance = ProductSigningCertificate.from_json(json)
# print the JSON string representation of the object
print(ProductSigningCertificate.to_json())

# convert the object into a dict
product_signing_certificate_dict = product_signing_certificate_instance.to_dict()
# create an instance of ProductSigningCertificate from a dict
product_signing_certificate_from_dict = ProductSigningCertificate.from_dict(product_signing_certificate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


