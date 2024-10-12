# PeeringServiceProviderProperties

The properties that define connectivity to the Peering Service Provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_provider_name** | **str** | The name of the service provider. | [optional] 

## Example

```python
from openapi_client.models.peering_service_provider_properties import PeeringServiceProviderProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PeeringServiceProviderProperties from a JSON string
peering_service_provider_properties_instance = PeeringServiceProviderProperties.from_json(json)
# print the JSON string representation of the object
print(PeeringServiceProviderProperties.to_json())

# convert the object into a dict
peering_service_provider_properties_dict = peering_service_provider_properties_instance.to_dict()
# create an instance of PeeringServiceProviderProperties from a dict
peering_service_provider_properties_from_dict = PeeringServiceProviderProperties.from_dict(peering_service_provider_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


