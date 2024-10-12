# ExpressRouteServiceProviderBandwidthsOffered

Contains Bandwidths offered in ExpressRouteServiceProviders

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer_name** | **str** | Gets the OfferName | [optional] 
**value_in_mbps** | **int** | Gets the ValueInMbps. | [optional] 

## Example

```python
from openapi_client.models.express_route_service_provider_bandwidths_offered import ExpressRouteServiceProviderBandwidthsOffered

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteServiceProviderBandwidthsOffered from a JSON string
express_route_service_provider_bandwidths_offered_instance = ExpressRouteServiceProviderBandwidthsOffered.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteServiceProviderBandwidthsOffered.to_json())

# convert the object into a dict
express_route_service_provider_bandwidths_offered_dict = express_route_service_provider_bandwidths_offered_instance.to_dict()
# create an instance of ExpressRouteServiceProviderBandwidthsOffered from a dict
express_route_service_provider_bandwidths_offered_from_dict = ExpressRouteServiceProviderBandwidthsOffered.from_dict(express_route_service_provider_bandwidths_offered_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


