# ServiceProviderParameter

Extra Parameters specific to each Service Provider

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default** | **str** | Default Name for the Service Provider | [optional] [readonly] 
**description** | **str** | Description of the Service Provider | [optional] [readonly] 
**display_name** | **str** | Display Name of the Service Provider | [optional] [readonly] 
**help_url** | **str** | Help Url for the  Service Provider | [optional] [readonly] 
**name** | **str** | Name of the Service Provider | [optional] [readonly] 
**type** | **str** | Type of the Service Provider | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_provider_parameter import ServiceProviderParameter

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceProviderParameter from a JSON string
service_provider_parameter_instance = ServiceProviderParameter.from_json(json)
# print the JSON string representation of the object
print(ServiceProviderParameter.to_json())

# convert the object into a dict
service_provider_parameter_dict = service_provider_parameter_instance.to_dict()
# create an instance of ServiceProviderParameter from a dict
service_provider_parameter_from_dict = ServiceProviderParameter.from_dict(service_provider_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


