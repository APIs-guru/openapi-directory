# ExpressRouteServiceProviderPropertiesFormat

Properties of ExpressRouteServiceProvider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bandwidths_offered** | [**List[ExpressRouteServiceProviderBandwidthsOffered]**](ExpressRouteServiceProviderBandwidthsOffered.md) | Gets bandwidths offered. | [optional] 
**peering_locations** | **List[str]** | Get a list of peering locations. | [optional] 
**provisioning_state** | **str** | Gets the provisioning state of the resource. | [optional] 

## Example

```python
from openapi_client.models.express_route_service_provider_properties_format import ExpressRouteServiceProviderPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteServiceProviderPropertiesFormat from a JSON string
express_route_service_provider_properties_format_instance = ExpressRouteServiceProviderPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteServiceProviderPropertiesFormat.to_json())

# convert the object into a dict
express_route_service_provider_properties_format_dict = express_route_service_provider_properties_format_instance.to_dict()
# create an instance of ExpressRouteServiceProviderPropertiesFormat from a dict
express_route_service_provider_properties_format_from_dict = ExpressRouteServiceProviderPropertiesFormat.from_dict(express_route_service_provider_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


