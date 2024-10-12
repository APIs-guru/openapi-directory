# GoogleCloudIntegrationsV1alphaListCertificatesResponse

Response to list Certificates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificates** | [**List[GoogleCloudIntegrationsV1alphaCertificate]**](GoogleCloudIntegrationsV1alphaCertificate.md) | The list of Certificates retrieved. | [optional] 
**next_page_token** | **str** | The token used to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_list_certificates_response import GoogleCloudIntegrationsV1alphaListCertificatesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaListCertificatesResponse from a JSON string
google_cloud_integrations_v1alpha_list_certificates_response_instance = GoogleCloudIntegrationsV1alphaListCertificatesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaListCertificatesResponse.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_list_certificates_response_dict = google_cloud_integrations_v1alpha_list_certificates_response_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaListCertificatesResponse from a dict
google_cloud_integrations_v1alpha_list_certificates_response_from_dict = GoogleCloudIntegrationsV1alphaListCertificatesResponse.from_dict(google_cloud_integrations_v1alpha_list_certificates_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


