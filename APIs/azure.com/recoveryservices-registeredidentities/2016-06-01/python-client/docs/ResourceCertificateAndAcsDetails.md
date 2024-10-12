# ResourceCertificateAndAcsDetails

Certificate details representing the Vault credentials for ACS.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**global_acs_host_name** | **str** | Acs mgmt host name to connect to. | 
**global_acs_namespace** | **str** | ACS namespace name - tenant for our service. | 
**global_acs_rp_realm** | **str** | Global ACS namespace RP realm. | 

## Example

```python
from openapi_client.models.resource_certificate_and_acs_details import ResourceCertificateAndAcsDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceCertificateAndAcsDetails from a JSON string
resource_certificate_and_acs_details_instance = ResourceCertificateAndAcsDetails.from_json(json)
# print the JSON string representation of the object
print(ResourceCertificateAndAcsDetails.to_json())

# convert the object into a dict
resource_certificate_and_acs_details_dict = resource_certificate_and_acs_details_instance.to_dict()
# create an instance of ResourceCertificateAndAcsDetails from a dict
resource_certificate_and_acs_details_from_dict = ResourceCertificateAndAcsDetails.from_dict(resource_certificate_and_acs_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


