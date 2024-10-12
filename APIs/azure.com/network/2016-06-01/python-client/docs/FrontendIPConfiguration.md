# FrontendIPConfiguration

Frontend IP address of the load balancer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated | [optional] 
**name** | **str** | Gets name of the resource that is unique within a resource group. This name can be used to access the resource | [optional] 
**properties** | [**FrontendIPConfigurationPropertiesFormat**](FrontendIPConfigurationPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] 

## Example

```python
from openapi_client.models.frontend_ip_configuration import FrontendIPConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of FrontendIPConfiguration from a JSON string
frontend_ip_configuration_instance = FrontendIPConfiguration.from_json(json)
# print the JSON string representation of the object
print(FrontendIPConfiguration.to_json())

# convert the object into a dict
frontend_ip_configuration_dict = frontend_ip_configuration_instance.to_dict()
# create an instance of FrontendIPConfiguration from a dict
frontend_ip_configuration_from_dict = FrontendIPConfiguration.from_dict(frontend_ip_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


