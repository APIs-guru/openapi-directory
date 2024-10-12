# StreamingEndpointProperties

The StreamingEndpoint properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_control** | [**StreamingEndpointAccessControl**](StreamingEndpointAccessControl.md) |  | [optional] 
**availability_set_name** | **str** | AvailabilitySet name | [optional] 
**cdn_enabled** | **bool** | The CDN enabled flag. | [optional] 
**cdn_profile** | **str** | The CDN profile name. | [optional] 
**cdn_provider** | **str** | The CDN provider name. | [optional] 
**created** | **datetime** | The exact time the StreamingEndpoint was created. | [optional] [readonly] 
**cross_site_access_policies** | [**CrossSiteAccessPolicies**](CrossSiteAccessPolicies.md) |  | [optional] 
**custom_host_names** | **List[str]** | The custom host names of the StreamingEndpoint | [optional] 
**description** | **str** | The StreamingEndpoint description. | [optional] 
**free_trial_end_time** | **datetime** | The free trial expiration time. | [optional] [readonly] 
**host_name** | **str** | The StreamingEndpoint host name. | [optional] [readonly] 
**last_modified** | **datetime** | The exact time the StreamingEndpoint was last modified. | [optional] [readonly] 
**max_cache_age** | **int** | Max cache age | [optional] 
**provisioning_state** | **str** | The provisioning state of the StreamingEndpoint. | [optional] [readonly] 
**resource_state** | **str** | The resource state of the StreamingEndpoint. | [optional] [readonly] 
**scale_units** | **int** | The number of scale units. | [optional] 

## Example

```python
from openapi_client.models.streaming_endpoint_properties import StreamingEndpointProperties

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingEndpointProperties from a JSON string
streaming_endpoint_properties_instance = StreamingEndpointProperties.from_json(json)
# print the JSON string representation of the object
print(StreamingEndpointProperties.to_json())

# convert the object into a dict
streaming_endpoint_properties_dict = streaming_endpoint_properties_instance.to_dict()
# create an instance of StreamingEndpointProperties from a dict
streaming_endpoint_properties_from_dict = StreamingEndpointProperties.from_dict(streaming_endpoint_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


