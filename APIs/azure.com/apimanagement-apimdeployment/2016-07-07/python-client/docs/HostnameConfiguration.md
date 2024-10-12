# HostnameConfiguration

Custom hostname configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate** | [**CertificateInformation**](CertificateInformation.md) |  | 
**hostname** | **str** | Hostname. | 
**type** | **str** | Hostname type. | 

## Example

```python
from openapi_client.models.hostname_configuration import HostnameConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of HostnameConfiguration from a JSON string
hostname_configuration_instance = HostnameConfiguration.from_json(json)
# print the JSON string representation of the object
print(HostnameConfiguration.to_json())

# convert the object into a dict
hostname_configuration_dict = hostname_configuration_instance.to_dict()
# create an instance of HostnameConfiguration from a dict
hostname_configuration_from_dict = HostnameConfiguration.from_dict(hostname_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


