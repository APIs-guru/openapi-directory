# AutoScaleConfiguration

AutoScale configuration properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_replicas** | **int** | The maximum number of replicas for each service. | [optional] 
**min_replicas** | **int** | The minimum number of replicas for each service. | [optional] 
**refresh_period_in_seconds** | **int** | Refresh period in seconds. | [optional] 
**status** | **str** | If auto-scale is enabled for all services. Each service can turn it off individually. | [optional] [default to 'Disabled']
**target_utilization** | **float** | The target utilization. | [optional] 

## Example

```python
from openapi_client.models.auto_scale_configuration import AutoScaleConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of AutoScaleConfiguration from a JSON string
auto_scale_configuration_instance = AutoScaleConfiguration.from_json(json)
# print the JSON string representation of the object
print(AutoScaleConfiguration.to_json())

# convert the object into a dict
auto_scale_configuration_dict = auto_scale_configuration_instance.to_dict()
# create an instance of AutoScaleConfiguration from a dict
auto_scale_configuration_from_dict = AutoScaleConfiguration.from_dict(auto_scale_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


