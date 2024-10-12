# ResourceCertificateAndAADDetails

Resource Certificate And AAD Details from IDM

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aad_authority** | **str** | AAD tenant authority | 
**aad_tenant_id** | **str** | AAD tenant Id | 
**auth_type** | **str** | Specify the Authentication type | [optional] 
**azure_management_endpoint_audience** | **str** | Azure Management Endpoint Audience | 
**certificate** | **str** | Gets or sets the base64 encoded certificate raw data string | 
**friendly_name** | **str** | Certificate friendly name | 
**issuer** | **str** | Certificate issuer | 
**resource_id** | **int** | Gets or Sets the ResourceId | 
**service_principal_client_id** | **str** | AAD service principal clientId | 
**service_principal_object_id** | **str** | AAD service principal ObjectId | 
**subject** | **str** | Certificate Subject Name | 
**thumbprint** | **str** | Certificate thumbprint | 
**valid_from** | **datetime** | Certificate Validity start Date time | 
**valid_to** | **datetime** | Certificate Validity End Date time | 

## Example

```python
from openapi_client.models.resource_certificate_and_aad_details import ResourceCertificateAndAADDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceCertificateAndAADDetails from a JSON string
resource_certificate_and_aad_details_instance = ResourceCertificateAndAADDetails.from_json(json)
# print the JSON string representation of the object
print(ResourceCertificateAndAADDetails.to_json())

# convert the object into a dict
resource_certificate_and_aad_details_dict = resource_certificate_and_aad_details_instance.to_dict()
# create an instance of ResourceCertificateAndAADDetails from a dict
resource_certificate_and_aad_details_from_dict = ResourceCertificateAndAADDetails.from_dict(resource_certificate_and_aad_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


