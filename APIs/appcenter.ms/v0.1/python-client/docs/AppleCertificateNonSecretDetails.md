# AppleCertificateNonSecretDetails

Apple Certificate Secret Details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_validity_end_date** | **str** | The date-time till which the certificate is valid | 
**certificate_validity_start_date** | **str** | The date-time from which the certificate is valid | 
**display_name** | **str** | The display name (CN) of the certificate | 

## Example

```python
from openapi_client.models.apple_certificate_non_secret_details import AppleCertificateNonSecretDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AppleCertificateNonSecretDetails from a JSON string
apple_certificate_non_secret_details_instance = AppleCertificateNonSecretDetails.from_json(json)
# print the JSON string representation of the object
print(AppleCertificateNonSecretDetails.to_json())

# convert the object into a dict
apple_certificate_non_secret_details_dict = apple_certificate_non_secret_details_instance.to_dict()
# create an instance of AppleCertificateNonSecretDetails from a dict
apple_certificate_non_secret_details_from_dict = AppleCertificateNonSecretDetails.from_dict(apple_certificate_non_secret_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


