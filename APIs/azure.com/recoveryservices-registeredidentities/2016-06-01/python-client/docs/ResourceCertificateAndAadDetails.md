# ResourceCertificateAndAadDetails

Certificate details representing the Vault credentials for AAD.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aad_authority** | **str** | AAD tenant authority. | 
**aad_tenant_id** | **str** | AAD tenant Id. | 
**azure_management_endpoint_audience** | **str** | Azure Management Endpoint Audience. | 
**service_principal_client_id** | **str** | AAD service principal clientId. | 
**service_principal_object_id** | **str** | AAD service principal ObjectId. | 

## Example

```python
from openapi_client.models.resource_certificate_and_aad_details import ResourceCertificateAndAadDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceCertificateAndAadDetails from a JSON string
resource_certificate_and_aad_details_instance = ResourceCertificateAndAadDetails.from_json(json)
# print the JSON string representation of the object
print(ResourceCertificateAndAadDetails.to_json())

# convert the object into a dict
resource_certificate_and_aad_details_dict = resource_certificate_and_aad_details_instance.to_dict()
# create an instance of ResourceCertificateAndAadDetails from a dict
resource_certificate_and_aad_details_from_dict = ResourceCertificateAndAadDetails.from_dict(resource_certificate_and_aad_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


