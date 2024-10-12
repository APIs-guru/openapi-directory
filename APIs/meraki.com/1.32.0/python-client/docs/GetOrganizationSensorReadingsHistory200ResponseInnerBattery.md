# GetOrganizationSensorReadingsHistory200ResponseInnerBattery

Reading for the 'battery' metric. This will only be present if the 'metric' property equals 'battery'.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**percentage** | **int** | Remaining battery life. | [optional] 

## Example

```python
from openapi_client.models.get_organization_sensor_readings_history200_response_inner_battery import GetOrganizationSensorReadingsHistory200ResponseInnerBattery

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationSensorReadingsHistory200ResponseInnerBattery from a JSON string
get_organization_sensor_readings_history200_response_inner_battery_instance = GetOrganizationSensorReadingsHistory200ResponseInnerBattery.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationSensorReadingsHistory200ResponseInnerBattery.to_json())

# convert the object into a dict
get_organization_sensor_readings_history200_response_inner_battery_dict = get_organization_sensor_readings_history200_response_inner_battery_instance.to_dict()
# create an instance of GetOrganizationSensorReadingsHistory200ResponseInnerBattery from a dict
get_organization_sensor_readings_history200_response_inner_battery_from_dict = GetOrganizationSensorReadingsHistory200ResponseInnerBattery.from_dict(get_organization_sensor_readings_history200_response_inner_battery_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


