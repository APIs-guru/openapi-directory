# GoogleChromePolicyVersionsV1RemoveCertificateErrorDetails

Details of the errors encountered during a remove certificate request. This message will be returned as part of the details of a google.rpc.Status returned to the user when there is an error in their request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_references** | [**List[GoogleChromePolicyVersionsV1CertificateReference]**](GoogleChromePolicyVersionsV1CertificateReference.md) | Output only. If the certificate was not removed, a list of references to the certificate that prevented it from being removed. Only unreferenced certificates can be removed. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_policy_versions_v1_remove_certificate_error_details import GoogleChromePolicyVersionsV1RemoveCertificateErrorDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromePolicyVersionsV1RemoveCertificateErrorDetails from a JSON string
google_chrome_policy_versions_v1_remove_certificate_error_details_instance = GoogleChromePolicyVersionsV1RemoveCertificateErrorDetails.from_json(json)
# print the JSON string representation of the object
print(GoogleChromePolicyVersionsV1RemoveCertificateErrorDetails.to_json())

# convert the object into a dict
google_chrome_policy_versions_v1_remove_certificate_error_details_dict = google_chrome_policy_versions_v1_remove_certificate_error_details_instance.to_dict()
# create an instance of GoogleChromePolicyVersionsV1RemoveCertificateErrorDetails from a dict
google_chrome_policy_versions_v1_remove_certificate_error_details_from_dict = GoogleChromePolicyVersionsV1RemoveCertificateErrorDetails.from_dict(google_chrome_policy_versions_v1_remove_certificate_error_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


