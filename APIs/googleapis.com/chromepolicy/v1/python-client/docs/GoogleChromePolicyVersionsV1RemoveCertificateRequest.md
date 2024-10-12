# GoogleChromePolicyVersionsV1RemoveCertificateRequest

Request object for removing a certificate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network_id** | **str** | Required. The GUID of the certificate to remove. | [optional] 
**target_resource** | **str** | Required. The target resource on which this certificate will be removed. The following resources are supported: * Organizational Unit (\&quot;orgunits/{orgunit_id}\&quot;) | [optional] 

## Example

```python
from openapi_client.models.google_chrome_policy_versions_v1_remove_certificate_request import GoogleChromePolicyVersionsV1RemoveCertificateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromePolicyVersionsV1RemoveCertificateRequest from a JSON string
google_chrome_policy_versions_v1_remove_certificate_request_instance = GoogleChromePolicyVersionsV1RemoveCertificateRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleChromePolicyVersionsV1RemoveCertificateRequest.to_json())

# convert the object into a dict
google_chrome_policy_versions_v1_remove_certificate_request_dict = google_chrome_policy_versions_v1_remove_certificate_request_instance.to_dict()
# create an instance of GoogleChromePolicyVersionsV1RemoveCertificateRequest from a dict
google_chrome_policy_versions_v1_remove_certificate_request_from_dict = GoogleChromePolicyVersionsV1RemoveCertificateRequest.from_dict(google_chrome_policy_versions_v1_remove_certificate_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


