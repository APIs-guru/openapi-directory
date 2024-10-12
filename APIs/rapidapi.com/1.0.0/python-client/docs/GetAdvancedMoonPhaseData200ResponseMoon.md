# GetAdvancedMoonPhaseData200ResponseMoon


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**age_days** | **float** |  | [optional] 
**emoji** | **str** |  | [optional] 
**illumination** | **str** |  | [optional] 
**lunar_cycle** | **str** |  | [optional] 
**moon_altitude** | **float** |  | [optional] 
**moon_azimuth** | **float** |  | [optional] 
**moon_distance** | **float** |  | [optional] 
**moon_parallactic_angle** | **float** |  | [optional] 
**moonrise** | **str** |  | [optional] 
**moonrise_timestamp** | **float** |  | [optional] 
**moonset** | **str** |  | [optional] 
**moonset_timestamp** | **float** |  | [optional] 
**phase** | **str** |  | [optional] 
**phase_name** | **str** |  | [optional] 
**stage** | **str** |  | [optional] 
**zodiac_sign** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.get_advanced_moon_phase_data200_response_moon import GetAdvancedMoonPhaseData200ResponseMoon

# TODO update the JSON string below
json = "{}"
# create an instance of GetAdvancedMoonPhaseData200ResponseMoon from a JSON string
get_advanced_moon_phase_data200_response_moon_instance = GetAdvancedMoonPhaseData200ResponseMoon.from_json(json)
# print the JSON string representation of the object
print(GetAdvancedMoonPhaseData200ResponseMoon.to_json())

# convert the object into a dict
get_advanced_moon_phase_data200_response_moon_dict = get_advanced_moon_phase_data200_response_moon_instance.to_dict()
# create an instance of GetAdvancedMoonPhaseData200ResponseMoon from a dict
get_advanced_moon_phase_data200_response_moon_from_dict = GetAdvancedMoonPhaseData200ResponseMoon.from_dict(get_advanced_moon_phase_data200_response_moon_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


