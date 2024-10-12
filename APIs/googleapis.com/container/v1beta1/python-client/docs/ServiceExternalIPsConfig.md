# ServiceExternalIPsConfig

Config to block services with externalIPs field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether Services with ExternalIPs field are allowed or not. | [optional] 

## Example

```python
from openapi_client.models.service_external_ips_config import ServiceExternalIPsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceExternalIPsConfig from a JSON string
service_external_ips_config_instance = ServiceExternalIPsConfig.from_json(json)
# print the JSON string representation of the object
print(ServiceExternalIPsConfig.to_json())

# convert the object into a dict
service_external_ips_config_dict = service_external_ips_config_instance.to_dict()
# create an instance of ServiceExternalIPsConfig from a dict
service_external_ips_config_from_dict = ServiceExternalIPsConfig.from_dict(service_external_ips_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


