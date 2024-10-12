# AppleCertificateDetails

Apple Certificate Details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base64_certificate** | **str** | The certificate contents in base 64 encoded string | 
**password** | **str** | The password for the certificate | 

## Example

```python
from openapi_client.models.apple_certificate_details import AppleCertificateDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AppleCertificateDetails from a JSON string
apple_certificate_details_instance = AppleCertificateDetails.from_json(json)
# print the JSON string representation of the object
print(AppleCertificateDetails.to_json())

# convert the object into a dict
apple_certificate_details_dict = apple_certificate_details_instance.to_dict()
# create an instance of AppleCertificateDetails from a dict
apple_certificate_details_from_dict = AppleCertificateDetails.from_dict(apple_certificate_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


