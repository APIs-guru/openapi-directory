# GetOrganizationSensorReadingsLatest200ResponseInnerReadingsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**battery** | [**GetOrganizationSensorReadingsHistory200ResponseInnerBattery**](GetOrganizationSensorReadingsHistory200ResponseInnerBattery.md) |  | [optional] 
**button** | [**GetOrganizationSensorReadingsHistory200ResponseInnerButton**](GetOrganizationSensorReadingsHistory200ResponseInnerButton.md) |  | [optional] 
**door** | [**GetOrganizationSensorReadingsHistory200ResponseInnerDoor**](GetOrganizationSensorReadingsHistory200ResponseInnerDoor.md) |  | [optional] 
**humidity** | [**GetOrganizationSensorReadingsHistory200ResponseInnerHumidity**](GetOrganizationSensorReadingsHistory200ResponseInnerHumidity.md) |  | [optional] 
**indoor_air_quality** | [**GetOrganizationSensorReadingsHistory200ResponseInnerIndoorAirQuality**](GetOrganizationSensorReadingsHistory200ResponseInnerIndoorAirQuality.md) |  | [optional] 
**metric** | **str** | Type of sensor reading. | [optional] 
**noise** | [**GetOrganizationSensorReadingsHistory200ResponseInnerNoise**](GetOrganizationSensorReadingsHistory200ResponseInnerNoise.md) |  | [optional] 
**pm25** | [**GetOrganizationSensorReadingsHistory200ResponseInnerPm25**](GetOrganizationSensorReadingsHistory200ResponseInnerPm25.md) |  | [optional] 
**temperature** | [**GetOrganizationSensorReadingsHistory200ResponseInnerTemperature**](GetOrganizationSensorReadingsHistory200ResponseInnerTemperature.md) |  | [optional] 
**ts** | **str** | Time at which the reading occurred, in ISO8601 format. | [optional] 
**tvoc** | [**GetOrganizationSensorReadingsHistory200ResponseInnerTvoc**](GetOrganizationSensorReadingsHistory200ResponseInnerTvoc.md) |  | [optional] 
**water** | [**GetOrganizationSensorReadingsHistory200ResponseInnerWater**](GetOrganizationSensorReadingsHistory200ResponseInnerWater.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_organization_sensor_readings_latest200_response_inner_readings_inner import GetOrganizationSensorReadingsLatest200ResponseInnerReadingsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationSensorReadingsLatest200ResponseInnerReadingsInner from a JSON string
get_organization_sensor_readings_latest200_response_inner_readings_inner_instance = GetOrganizationSensorReadingsLatest200ResponseInnerReadingsInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationSensorReadingsLatest200ResponseInnerReadingsInner.to_json())

# convert the object into a dict
get_organization_sensor_readings_latest200_response_inner_readings_inner_dict = get_organization_sensor_readings_latest200_response_inner_readings_inner_instance.to_dict()
# create an instance of GetOrganizationSensorReadingsLatest200ResponseInnerReadingsInner from a dict
get_organization_sensor_readings_latest200_response_inner_readings_inner_from_dict = GetOrganizationSensorReadingsLatest200ResponseInnerReadingsInner.from_dict(get_organization_sensor_readings_latest200_response_inner_readings_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


