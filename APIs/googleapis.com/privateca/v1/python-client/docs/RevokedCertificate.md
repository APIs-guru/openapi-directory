# RevokedCertificate

Describes a revoked Certificate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate** | **str** | The resource name for the Certificate in the format &#x60;projects/*/locations/*/caPools/*/certificates/*&#x60;. | [optional] 
**hex_serial_number** | **str** | The serial number of the Certificate. | [optional] 
**revocation_reason** | **str** | The reason the Certificate was revoked. | [optional] 

## Example

```python
from openapi_client.models.revoked_certificate import RevokedCertificate

# TODO update the JSON string below
json = "{}"
# create an instance of RevokedCertificate from a JSON string
revoked_certificate_instance = RevokedCertificate.from_json(json)
# print the JSON string representation of the object
print(RevokedCertificate.to_json())

# convert the object into a dict
revoked_certificate_dict = revoked_certificate_instance.to_dict()
# create an instance of RevokedCertificate from a dict
revoked_certificate_from_dict = RevokedCertificate.from_dict(revoked_certificate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


