# HPAConfig

Autoscaling config for connector deployment system metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu_utilization_threshold** | **str** | Output only. Percent CPU utilization where HPA triggers autoscaling. | [optional] [readonly] 
**memory_utilization_threshold** | **str** | Output only. Percent Memory utilization where HPA triggers autoscaling. | [optional] [readonly] 

## Example

```python
from openapi_client.models.hpa_config import HPAConfig

# TODO update the JSON string below
json = "{}"
# create an instance of HPAConfig from a JSON string
hpa_config_instance = HPAConfig.from_json(json)
# print the JSON string representation of the object
print(HPAConfig.to_json())

# convert the object into a dict
hpa_config_dict = hpa_config_instance.to_dict()
# create an instance of HPAConfig from a dict
hpa_config_from_dict = HPAConfig.from_dict(hpa_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


