# GetOrganizationSensorReadingsHistory200ResponseInnerTemperature

Reading for the 'temperature' metric. This will only be present if the 'metric' property equals 'temperature'.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**celsius** | **float** | Temperature reading in degrees Celsius. | [optional] 
**fahrenheit** | **float** | Temperature reading in degrees Fahrenheit. | [optional] 

## Example

```python
from openapi_client.models.get_organization_sensor_readings_history200_response_inner_temperature import GetOrganizationSensorReadingsHistory200ResponseInnerTemperature

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationSensorReadingsHistory200ResponseInnerTemperature from a JSON string
get_organization_sensor_readings_history200_response_inner_temperature_instance = GetOrganizationSensorReadingsHistory200ResponseInnerTemperature.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationSensorReadingsHistory200ResponseInnerTemperature.to_json())

# convert the object into a dict
get_organization_sensor_readings_history200_response_inner_temperature_dict = get_organization_sensor_readings_history200_response_inner_temperature_instance.to_dict()
# create an instance of GetOrganizationSensorReadingsHistory200ResponseInnerTemperature from a dict
get_organization_sensor_readings_history200_response_inner_temperature_from_dict = GetOrganizationSensorReadingsHistory200ResponseInnerTemperature.from_dict(get_organization_sensor_readings_history200_response_inner_temperature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


