# GetOrganizationSensorReadingsHistory200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**battery** | [**GetOrganizationSensorReadingsHistory200ResponseInnerBattery**](GetOrganizationSensorReadingsHistory200ResponseInnerBattery.md) |  | [optional] 
**button** | [**GetOrganizationSensorReadingsHistory200ResponseInnerButton**](GetOrganizationSensorReadingsHistory200ResponseInnerButton.md) |  | [optional] 
**door** | [**GetOrganizationSensorReadingsHistory200ResponseInnerDoor**](GetOrganizationSensorReadingsHistory200ResponseInnerDoor.md) |  | [optional] 
**humidity** | [**GetOrganizationSensorReadingsHistory200ResponseInnerHumidity**](GetOrganizationSensorReadingsHistory200ResponseInnerHumidity.md) |  | [optional] 
**indoor_air_quality** | [**GetOrganizationSensorReadingsHistory200ResponseInnerIndoorAirQuality**](GetOrganizationSensorReadingsHistory200ResponseInnerIndoorAirQuality.md) |  | [optional] 
**metric** | **str** | Type of sensor reading. | [optional] 
**network** | [**GetOrganizationSensorReadingsHistory200ResponseInnerNetwork**](GetOrganizationSensorReadingsHistory200ResponseInnerNetwork.md) |  | [optional] 
**noise** | [**GetOrganizationSensorReadingsHistory200ResponseInnerNoise**](GetOrganizationSensorReadingsHistory200ResponseInnerNoise.md) |  | [optional] 
**pm25** | [**GetOrganizationSensorReadingsHistory200ResponseInnerPm25**](GetOrganizationSensorReadingsHistory200ResponseInnerPm25.md) |  | [optional] 
**serial** | **str** | Serial number of the sensor that took the reading. | [optional] 
**temperature** | [**GetOrganizationSensorReadingsHistory200ResponseInnerTemperature**](GetOrganizationSensorReadingsHistory200ResponseInnerTemperature.md) |  | [optional] 
**ts** | **str** | Time at which the reading occurred, in ISO8601 format. | [optional] 
**tvoc** | [**GetOrganizationSensorReadingsHistory200ResponseInnerTvoc**](GetOrganizationSensorReadingsHistory200ResponseInnerTvoc.md) |  | [optional] 
**water** | [**GetOrganizationSensorReadingsHistory200ResponseInnerWater**](GetOrganizationSensorReadingsHistory200ResponseInnerWater.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_organization_sensor_readings_history200_response_inner import GetOrganizationSensorReadingsHistory200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationSensorReadingsHistory200ResponseInner from a JSON string
get_organization_sensor_readings_history200_response_inner_instance = GetOrganizationSensorReadingsHistory200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationSensorReadingsHistory200ResponseInner.to_json())

# convert the object into a dict
get_organization_sensor_readings_history200_response_inner_dict = get_organization_sensor_readings_history200_response_inner_instance.to_dict()
# create an instance of GetOrganizationSensorReadingsHistory200ResponseInner from a dict
get_organization_sensor_readings_history200_response_inner_from_dict = GetOrganizationSensorReadingsHistory200ResponseInner.from_dict(get_organization_sensor_readings_history200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


