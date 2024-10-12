# SslSettings

SSL configuration for a DomainMapping resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_id** | **str** | ID of the AuthorizedCertificate resource configuring SSL for the application. Clearing this field will remove SSL support.By default, a managed certificate is automatically created for every domain mapping. To omit SSL support or to configure SSL manually, specify no_managed_certificate on a CREATE or UPDATE request. You must be authorized to administer the AuthorizedCertificate resource to manually map it to a DomainMapping resource. Example: 12345. | [optional] 
**is_managed_certificate** | **bool** | Whether the mapped certificate is an App Engine managed certificate. Managed certificates are created by default with a domain mapping. To opt out, specify no_managed_certificate on a CREATE or UPDATE request.@OutputOnly | [optional] 

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


