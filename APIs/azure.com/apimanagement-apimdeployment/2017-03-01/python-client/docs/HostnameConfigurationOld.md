# HostnameConfigurationOld

Custom hostname configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate** | [**CertificateInformation**](CertificateInformation.md) |  | 
**hostname** | **str** | Hostname to configure. | 
**type** | **str** | Hostname type. | 

## Example

```python
from openapi_client.models.hostname_configuration_old import HostnameConfigurationOld

# TODO update the JSON string below
json = "{}"
# create an instance of HostnameConfigurationOld from a JSON string
hostname_configuration_old_instance = HostnameConfigurationOld.from_json(json)
# print the JSON string representation of the object
print(HostnameConfigurationOld.to_json())

# convert the object into a dict
hostname_configuration_old_dict = hostname_configuration_old_instance.to_dict()
# create an instance of HostnameConfigurationOld from a dict
hostname_configuration_old_from_dict = HostnameConfigurationOld.from_dict(hostname_configuration_old_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


