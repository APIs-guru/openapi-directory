# ServiceProvider

Service Provider Definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ServiceProviderProperties**](ServiceProviderProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.service_provider import ServiceProvider

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceProvider from a JSON string
service_provider_instance = ServiceProvider.from_json(json)
# print the JSON string representation of the object
print(ServiceProvider.to_json())

# convert the object into a dict
service_provider_dict = service_provider_instance.to_dict()
# create an instance of ServiceProvider from a dict
service_provider_from_dict = ServiceProvider.from_dict(service_provider_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


