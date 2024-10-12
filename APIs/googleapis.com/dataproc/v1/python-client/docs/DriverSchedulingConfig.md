# DriverSchedulingConfig

Driver scheduling configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**memory_mb** | **int** | Required. The amount of memory in MB the driver is requesting. | [optional] 
**vcores** | **int** | Required. The number of vCPUs the driver is requesting. | [optional] 

## Example

```python
from openapi_client.models.driver_scheduling_config import DriverSchedulingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DriverSchedulingConfig from a JSON string
driver_scheduling_config_instance = DriverSchedulingConfig.from_json(json)
# print the JSON string representation of the object
print(DriverSchedulingConfig.to_json())

# convert the object into a dict
driver_scheduling_config_dict = driver_scheduling_config_instance.to_dict()
# create an instance of DriverSchedulingConfig from a dict
driver_scheduling_config_from_dict = DriverSchedulingConfig.from_dict(driver_scheduling_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


