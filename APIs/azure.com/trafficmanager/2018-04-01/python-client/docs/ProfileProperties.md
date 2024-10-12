# ProfileProperties

Class representing the Traffic Manager profile properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns_config** | [**DnsConfig**](DnsConfig.md) |  | [optional] 
**endpoints** | [**List[Endpoint]**](Endpoint.md) | The list of endpoints in the Traffic Manager profile. | [optional] 
**max_return** | **int** | Maximum number of endpoints to be returned for MultiValue routing type. | [optional] 
**monitor_config** | [**MonitorConfig**](MonitorConfig.md) |  | [optional] 
**profile_status** | **str** | The status of the Traffic Manager profile. | [optional] 
**traffic_routing_method** | **str** | The traffic routing method of the Traffic Manager profile. | [optional] 
**traffic_view_enrollment_status** | **str** | Indicates whether Traffic View is &#39;Enabled&#39; or &#39;Disabled&#39; for the Traffic Manager profile. Null, indicates &#39;Disabled&#39;. Enabling this feature will increase the cost of the Traffic Manage profile. | [optional] 

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


