# GoogleChromePolicyVersionsV1DefineCertificateResponse

Response object for creating a certificate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network_id** | **str** | The guid of the certificate created by the action. | [optional] 
**settings** | [**List[GoogleChromePolicyVersionsV1NetworkSetting]**](GoogleChromePolicyVersionsV1NetworkSetting.md) | the affiliated settings of the certificate (NOT IMPLEMENTED) | [optional] 
**target_resource** | **str** | the resource at which the certificate is defined. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_policy_versions_v1_define_certificate_response import GoogleChromePolicyVersionsV1DefineCertificateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromePolicyVersionsV1DefineCertificateResponse from a JSON string
google_chrome_policy_versions_v1_define_certificate_response_instance = GoogleChromePolicyVersionsV1DefineCertificateResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleChromePolicyVersionsV1DefineCertificateResponse.to_json())

# convert the object into a dict
google_chrome_policy_versions_v1_define_certificate_response_dict = google_chrome_policy_versions_v1_define_certificate_response_instance.to_dict()
# create an instance of GoogleChromePolicyVersionsV1DefineCertificateResponse from a dict
google_chrome_policy_versions_v1_define_certificate_response_from_dict = GoogleChromePolicyVersionsV1DefineCertificateResponse.from_dict(google_chrome_policy_versions_v1_define_certificate_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


