# GoogleCloudIntegrationsV1alphaCertificate

The certificate definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_status** | **str** | Status of the certificate | [optional] 
**credential_id** | **str** | Immutable. Credential id that will be used to register with trawler INTERNAL_ONLY | [optional] 
**description** | **str** | Description of the certificate | [optional] 
**display_name** | **str** | Name of the certificate | [optional] 
**name** | **str** | Output only. Auto generated primary key | [optional] [readonly] 
**raw_certificate** | [**GoogleCloudIntegrationsV1alphaClientCertificate**](GoogleCloudIntegrationsV1alphaClientCertificate.md) |  | [optional] 
**requestor_id** | **str** | Immutable. Requestor ID to be used to register certificate with trawler | [optional] 
**valid_end_time** | **str** | Output only. The timestamp after which certificate will expire | [optional] [readonly] 
**valid_start_time** | **str** | Output only. The timestamp after which certificate will be valid | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_certificate import GoogleCloudIntegrationsV1alphaCertificate

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaCertificate from a JSON string
google_cloud_integrations_v1alpha_certificate_instance = GoogleCloudIntegrationsV1alphaCertificate.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaCertificate.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_certificate_dict = google_cloud_integrations_v1alpha_certificate_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaCertificate from a dict
google_cloud_integrations_v1alpha_certificate_from_dict = GoogleCloudIntegrationsV1alphaCertificate.from_dict(google_cloud_integrations_v1alpha_certificate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


