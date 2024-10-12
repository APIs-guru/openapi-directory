# SslSettings

SSL configuration for a DomainMapping resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_id** | **str** | ID of the AuthorizedCertificate resource configuring SSL for the application. Clearing this field will remove SSL support.By default, a managed certificate is automatically created for every domain mapping. To omit SSL support or to configure SSL manually, specify SslManagementType.MANUAL on a CREATE or UPDATE request. You must be authorized to administer the AuthorizedCertificate resource to manually map it to a DomainMapping resource. Example: 12345. | [optional] 
**pending_managed_certificate_id** | **str** | ID of the managed AuthorizedCertificate resource currently being provisioned, if applicable. Until the new managed certificate has been successfully provisioned, the previous SSL state will be preserved. Once the provisioning process completes, the certificate_id field will reflect the new managed certificate and this field will be left empty. To remove SSL support while there is still a pending managed certificate, clear the certificate_id field with an UpdateDomainMappingRequest.@OutputOnly | [optional] 
**ssl_management_type** | **str** | SSL management type for this domain. If AUTOMATIC, a managed certificate is automatically provisioned. If MANUAL, certificate_id must be manually specified in order to configure SSL for this domain. | [optional] 

## Example

```python
from openapi_client.models.ssl_settings import SslSettings

# TODO update the JSON string below
json = "{}"
# create an instance of SslSettings from a JSON string
ssl_settings_instance = SslSettings.from_json(json)
# print the JSON string representation of the object
print(SslSettings.to_json())

# convert the object into a dict
ssl_settings_dict = ssl_settings_instance.to_dict()
# create an instance of SslSettings from a dict
ssl_settings_from_dict = SslSettings.from_dict(ssl_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


