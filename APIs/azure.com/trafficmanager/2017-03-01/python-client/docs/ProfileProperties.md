# ProfileProperties

Class representing the Traffic Manager profile properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns_config** | [**DnsConfig**](DnsConfig.md) |  | [optional] 
**endpoints** | [**List[Endpoint]**](Endpoint.md) | Gets or sets the list of endpoints in the Traffic Manager profile. | [optional] 
**monitor_config** | [**MonitorConfig**](MonitorConfig.md) |  | [optional] 
**profile_status** | **str** | Gets or sets the status of the Traffic Manager profile.  Possible values are &#39;Enabled&#39; and &#39;Disabled&#39;. | [optional] 
**traffic_routing_method** | **str** | Gets or sets the traffic routing method of the Traffic Manager profile.  Possible values are &#39;Performance&#39;, &#39;Weighted&#39;, &#39;Priority&#39; or &#39;Geographic&#39;. | [optional] 

## Example

```python
from openapi_client.models.profile_properties import ProfileProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileProperties from a JSON string
profile_properties_instance = ProfileProperties.from_json(json)
# print the JSON string representation of the object
print(ProfileProperties.to_json())

# convert the object into a dict
profile_properties_dict = profile_properties_instance.to_dict()
# create an instance of ProfileProperties from a dict
profile_properties_from_dict = ProfileProperties.from_dict(profile_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


