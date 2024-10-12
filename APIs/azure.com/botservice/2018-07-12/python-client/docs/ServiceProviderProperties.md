# ServiceProviderProperties

The Object used to describe a Service Provider supported by Bot Service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dev_portal_url** | **str** | Display Name of the Service Provider | [optional] [readonly] 
**display_name** | **str** | Display Name of the Service Provider | [optional] [readonly] 
**icon_url** | **str** | Display Name of the Service Provider | [optional] [readonly] 
**id** | **str** | Id for Service Provider | [optional] [readonly] 
**parameters** | [**List[ServiceProviderParameter]**](ServiceProviderParameter.md) | The list of parameters for the Service Provider | [optional] 
**service_provider_name** | **str** | Display Name of the Service Provider | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_provider_properties import ServiceProviderProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceProviderProperties from a JSON string
service_provider_properties_instance = ServiceProviderProperties.from_json(json)
# print the JSON string representation of the object
print(ServiceProviderProperties.to_json())

# convert the object into a dict
service_provider_properties_dict = service_provider_properties_instance.to_dict()
# create an instance of ServiceProviderProperties from a dict
service_provider_properties_from_dict = ServiceProviderProperties.from_dict(service_provider_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


