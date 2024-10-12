# GetAdvancedMoonPhaseData200ResponseSun


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day_length** | **str** |  | [optional] 
**solar_noon** | **str** |  | [optional] 
**sun_altitude** | **float** |  | [optional] 
**sun_azimuth** | **float** |  | [optional] 
**sun_distance** | **float** |  | [optional] 
**sunrise** | **float** |  | [optional] 
**sunrise_timestamp** | **str** |  | [optional] 
**sunset** | **float** |  | [optional] 
**sunset_timestamp** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.get_advanced_moon_phase_data200_response_sun import GetAdvancedMoonPhaseData200ResponseSun

# TODO update the JSON string below
json = "{}"
# create an instance of GetAdvancedMoonPhaseData200ResponseSun from a JSON string
get_advanced_moon_phase_data200_response_sun_instance = GetAdvancedMoonPhaseData200ResponseSun.from_json(json)
# print the JSON string representation of the object
print(GetAdvancedMoonPhaseData200ResponseSun.to_json())

# convert the object into a dict
get_advanced_moon_phase_data200_response_sun_dict = get_advanced_moon_phase_data200_response_sun_instance.to_dict()
# create an instance of GetAdvancedMoonPhaseData200ResponseSun from a dict
get_advanced_moon_phase_data200_response_sun_from_dict = GetAdvancedMoonPhaseData200ResponseSun.from_dict(get_advanced_moon_phase_data200_response_sun_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


