# ConfigDataProperties

Configuration data properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**digests** | [**List[DigestConfig]**](DigestConfig.md) | Advisor digest configuration. Valid only for subscriptions | [optional] 
**exclude** | **bool** | Exclude the resource from Advisor evaluations. Valid values: False (default) or True. | [optional] 
**low_cpu_threshold** | **str** | Minimum percentage threshold for Advisor low CPU utilization evaluation. Valid only for subscriptions. Valid values: 5 (default), 10, 15 or 20. | [optional] 

## Example

```python
from openapi_client.models.config_data_properties import ConfigDataProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigDataProperties from a JSON string
config_data_properties_instance = ConfigDataProperties.from_json(json)
# print the JSON string representation of the object
print(ConfigDataProperties.to_json())

# convert the object into a dict
config_data_properties_dict = config_data_properties_instance.to_dict()
# create an instance of ConfigDataProperties from a dict
config_data_properties_from_dict = ConfigDataProperties.from_dict(config_data_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


