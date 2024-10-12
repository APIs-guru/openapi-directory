# GetOrganizationSensorReadingsHistory200ResponseInnerIndoorAirQuality

Reading for the 'indoorAirQuality' metric. This will only be present if the 'metric' property equals 'indoorAirQuality'.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**score** | **int** | Indoor air quality score between 0 and 100. | [optional] 

## Example

```python
from openapi_client.models.get_organization_sensor_readings_history200_response_inner_indoor_air_quality import GetOrganizationSensorReadingsHistory200ResponseInnerIndoorAirQuality

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationSensorReadingsHistory200ResponseInnerIndoorAirQuality from a JSON string
get_organization_sensor_readings_history200_response_inner_indoor_air_quality_instance = GetOrganizationSensorReadingsHistory200ResponseInnerIndoorAirQuality.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationSensorReadingsHistory200ResponseInnerIndoorAirQuality.to_json())

# convert the object into a dict
get_organization_sensor_readings_history200_response_inner_indoor_air_quality_dict = get_organization_sensor_readings_history200_response_inner_indoor_air_quality_instance.to_dict()
# create an instance of GetOrganizationSensorReadingsHistory200ResponseInnerIndoorAirQuality from a dict
get_organization_sensor_readings_history200_response_inner_indoor_air_quality_from_dict = GetOrganizationSensorReadingsHistory200ResponseInnerIndoorAirQuality.from_dict(get_organization_sensor_readings_history200_response_inner_indoor_air_quality_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


