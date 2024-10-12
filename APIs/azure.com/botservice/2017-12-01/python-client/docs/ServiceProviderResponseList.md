# ServiceProviderResponseList

The list of bot service providers response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link used to get the next page of bot service providers. | [optional] 
**value** | [**List[ServiceProvider]**](ServiceProvider.md) | Gets the list of bot service providers and their properties. | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_provider_response_list import ServiceProviderResponseList

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceProviderResponseList from a JSON string
service_provider_response_list_instance = ServiceProviderResponseList.from_json(json)
# print the JSON string representation of the object
print(ServiceProviderResponseList.to_json())

# convert the object into a dict
service_provider_response_list_dict = service_provider_response_list_instance.to_dict()
# create an instance of ServiceProviderResponseList from a dict
service_provider_response_list_from_dict = ServiceProviderResponseList.from_dict(service_provider_response_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


