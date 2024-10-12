# OriginGroupUpdatePropertiesParameters

The JSON object that contains the properties of the origin group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**health_probe_settings** | [**HealthProbeParameters**](HealthProbeParameters.md) |  | [optional] 
**origins** | [**List[ResourceReference]**](ResourceReference.md) | The source of the content being delivered via CDN within given origin group. | [optional] 
**response_based_origin_error_detection_settings** | [**ResponseBasedOriginErrorDetectionParameters**](ResponseBasedOriginErrorDetectionParameters.md) |  | [optional] 
**traffic_restoration_time_to_healed_or_new_endpoints_in_minutes** | **int** | Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported. | [optional] 

## Example

```python
from openapi_client.models.origin_group_update_properties_parameters import OriginGroupUpdatePropertiesParameters

# TODO update the JSON string below
json = "{}"
# create an instance of OriginGroupUpdatePropertiesParameters from a JSON string
origin_group_update_properties_parameters_instance = OriginGroupUpdatePropertiesParameters.from_json(json)
# print the JSON string representation of the object
print(OriginGroupUpdatePropertiesParameters.to_json())

# convert the object into a dict
origin_group_update_properties_parameters_dict = origin_group_update_properties_parameters_instance.to_dict()
# create an instance of OriginGroupUpdatePropertiesParameters from a dict
origin_group_update_properties_parameters_from_dict = OriginGroupUpdatePropertiesParameters.from_dict(origin_group_update_properties_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


