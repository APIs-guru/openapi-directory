# RateLimitedNetworkServiceConfigPartial

Rate limited network services include a capacity property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | **int** | The capacity of the service in Mbps. If set to Null, the maximum capacity will be used, i.e. the virtual circuit is not rate-limited.  An exchange may choose to constrain the available capacity range of a &#x60;ProductOffering&#x60;.  That means, the service can consume up to the total bandwidth of the &#x60;Connection&#x60;.  Typically the service is charged based on the capacity. | [optional] 

## Example

```python
from openapi_client.models.rate_limited_network_service_config_partial import RateLimitedNetworkServiceConfigPartial

# TODO update the JSON string below
json = "{}"
# create an instance of RateLimitedNetworkServiceConfigPartial from a JSON string
rate_limited_network_service_config_partial_instance = RateLimitedNetworkServiceConfigPartial.from_json(json)
# print the JSON string representation of the object
print(RateLimitedNetworkServiceConfigPartial.to_json())

# convert the object into a dict
rate_limited_network_service_config_partial_dict = rate_limited_network_service_config_partial_instance.to_dict()
# create an instance of RateLimitedNetworkServiceConfigPartial from a dict
rate_limited_network_service_config_partial_from_dict = RateLimitedNetworkServiceConfigPartial.from_dict(rate_limited_network_service_config_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


