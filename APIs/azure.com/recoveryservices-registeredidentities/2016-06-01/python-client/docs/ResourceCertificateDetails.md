# ResourceCertificateDetails

Certificate details representing the Vault credentials.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_type** | **str** | This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types. | 
**certificate** | **bytearray** | The base64 encoded certificate raw data string. | [optional] 
**friendly_name** | **str** | Certificate friendly name. | [optional] 
**issuer** | **str** | Certificate issuer. | [optional] 
**resource_id** | **int** | Resource ID of the vault. | [optional] 
**subject** | **str** | Certificate Subject Name. | [optional] 
**thumbprint** | **str** | Certificate thumbprint. | [optional] 
**valid_from** | **datetime** | Certificate Validity start Date time. | [optional] 
**valid_to** | **datetime** | Certificate Validity End Date time. | [optional] 

## Example

```python
from openapi_client.models.resource_certificate_details import ResourceCertificateDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceCertificateDetails from a JSON string
resource_certificate_details_instance = ResourceCertificateDetails.from_json(json)
# print the JSON string representation of the object
print(ResourceCertificateDetails.to_json())

# convert the object into a dict
resource_certificate_details_dict = resource_certificate_details_instance.to_dict()
# create an instance of ResourceCertificateDetails from a dict
resource_certificate_details_from_dict = ResourceCertificateDetails.from_dict(resource_certificate_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


