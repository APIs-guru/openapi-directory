# AppleCertificateNonSecretDetailsResponse

Apple certificate non-secret details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **object** | apple certificate non-secret details | 
**credential_type** | **str** | the type of the credential | [optional] 
**display_name** | **str** | display name of shared connection | 
**service_type** | **str** | service type of shared connection can be apple|gitlab|googleplay|jira | 

## Example

```python
from openapi_client.models.apple_certificate_non_secret_details_response import AppleCertificateNonSecretDetailsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppleCertificateNonSecretDetailsResponse from a JSON string
apple_certificate_non_secret_details_response_instance = AppleCertificateNonSecretDetailsResponse.from_json(json)
# print the JSON string representation of the object
print(AppleCertificateNonSecretDetailsResponse.to_json())

# convert the object into a dict
apple_certificate_non_secret_details_response_dict = apple_certificate_non_secret_details_response_instance.to_dict()
# create an instance of AppleCertificateNonSecretDetailsResponse from a dict
apple_certificate_non_secret_details_response_from_dict = AppleCertificateNonSecretDetailsResponse.from_dict(apple_certificate_non_secret_details_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


