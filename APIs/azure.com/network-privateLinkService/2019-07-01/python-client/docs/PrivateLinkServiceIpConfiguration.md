# PrivateLinkServiceIpConfiguration

The private link service ip configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**name** | **str** | The name of private link service ip configuration. | [optional] 
**properties** | [**PrivateLinkServiceIpConfigurationProperties**](PrivateLinkServiceIpConfigurationProperties.md) |  | [optional] 
**type** | **str** | The resource type. | [optional] [readonly] 
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.private_link_service_ip_configuration import PrivateLinkServiceIpConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateLinkServiceIpConfiguration from a JSON string
private_link_service_ip_configuration_instance = PrivateLinkServiceIpConfiguration.from_json(json)
# print the JSON string representation of the object
print(PrivateLinkServiceIpConfiguration.to_json())

# convert the object into a dict
private_link_service_ip_configuration_dict = private_link_service_ip_configuration_instance.to_dict()
# create an instance of PrivateLinkServiceIpConfiguration from a dict
private_link_service_ip_configuration_from_dict = PrivateLinkServiceIpConfiguration.from_dict(private_link_service_ip_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


