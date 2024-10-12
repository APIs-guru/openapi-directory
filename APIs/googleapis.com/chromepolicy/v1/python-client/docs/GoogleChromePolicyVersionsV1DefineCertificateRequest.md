# GoogleChromePolicyVersionsV1DefineCertificateRequest

Request object for creating a certificate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ceritificate_name** | **str** | Optional. The optional name of the certificate. If not specified, the certificate issuer will be used as the name. | [optional] 
**certificate** | **str** | Required. The raw contents of the .PEM, .CRT, or .CER file. | [optional] 
**settings** | [**List[GoogleChromePolicyVersionsV1NetworkSetting]**](GoogleChromePolicyVersionsV1NetworkSetting.md) | Optional. Certificate settings within the chrome.networks.certificates namespace. | [optional] 
**target_resource** | **str** | Required. The target resource on which this certificate is applied. The following resources are supported: * Organizational Unit (\&quot;orgunits/{orgunit_id}\&quot;) | [optional] 

## Example

```python
from openapi_client.models.google_chrome_policy_versions_v1_define_certificate_request import GoogleChromePolicyVersionsV1DefineCertificateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromePolicyVersionsV1DefineCertificateRequest from a JSON string
google_chrome_policy_versions_v1_define_certificate_request_instance = GoogleChromePolicyVersionsV1DefineCertificateRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleChromePolicyVersionsV1DefineCertificateRequest.to_json())

# convert the object into a dict
google_chrome_policy_versions_v1_define_certificate_request_dict = google_chrome_policy_versions_v1_define_certificate_request_instance.to_dict()
# create an instance of GoogleChromePolicyVersionsV1DefineCertificateRequest from a dict
google_chrome_policy_versions_v1_define_certificate_request_from_dict = GoogleChromePolicyVersionsV1DefineCertificateRequest.from_dict(google_chrome_policy_versions_v1_define_certificate_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


