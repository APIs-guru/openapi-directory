# DeepCreatedOriginGroupProperties

Properties of the origin group created on the CDN endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**health_probe_settings** | [**HealthProbeParameters**](HealthProbeParameters.md) |  | [optional] 
**origins** | [**List[ResourceReference]**](ResourceReference.md) | The source of the content being delivered via CDN within given origin group. | 
**response_based_origin_error_detection_settings** | [**ResponseBasedOriginErrorDetectionParameters**](ResponseBasedOriginErrorDetectionParameters.md) |  | [optional] 
**traffic_restoration_time_to_healed_or_new_endpoints_in_minutes** | **int** | Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported. | [optional] 

## Example

```python
from openapi_client.models.deep_created_origin_group_properties import DeepCreatedOriginGroupProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DeepCreatedOriginGroupProperties from a JSON string
deep_created_origin_group_properties_instance = DeepCreatedOriginGroupProperties.from_json(json)
# print the JSON string representation of the object
print(DeepCreatedOriginGroupProperties.to_json())

# convert the object into a dict
deep_created_origin_group_properties_dict = deep_created_origin_group_properties_instance.to_dict()
# create an instance of DeepCreatedOriginGroupProperties from a dict
deep_created_origin_group_properties_from_dict = DeepCreatedOriginGroupProperties.from_dict(deep_created_origin_group_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


