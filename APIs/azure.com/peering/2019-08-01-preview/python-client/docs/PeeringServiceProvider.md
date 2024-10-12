# PeeringServiceProvider

PeeringService provider

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**PeeringServiceProviderProperties**](PeeringServiceProviderProperties.md) |  | [optional] 
**id** | **str** | The ID of the resource. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.peering_service_provider import PeeringServiceProvider

# TODO update the JSON string below
json = "{}"
# create an instance of PeeringServiceProvider from a JSON string
peering_service_provider_instance = PeeringServiceProvider.from_json(json)
# print the JSON string representation of the object
print(PeeringServiceProvider.to_json())

# convert the object into a dict
peering_service_provider_dict = peering_service_provider_instance.to_dict()
# create an instance of PeeringServiceProvider from a dict
peering_service_provider_from_dict = PeeringServiceProvider.from_dict(peering_service_provider_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


