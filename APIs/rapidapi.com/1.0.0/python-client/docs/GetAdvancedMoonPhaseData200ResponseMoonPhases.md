# GetAdvancedMoonPhaseData200ResponseMoonPhases


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_quarter** | [**GetAdvancedMoonPhaseData200ResponseMoonPhasesFirstQuarter**](GetAdvancedMoonPhaseData200ResponseMoonPhasesFirstQuarter.md) |  | [optional] 
**full_moon** | [**GetAdvancedMoonPhaseData200ResponseMoonPhasesFullMoon**](GetAdvancedMoonPhaseData200ResponseMoonPhasesFullMoon.md) |  | [optional] 
**last_quarter** | [**GetAdvancedMoonPhaseData200ResponseMoonPhasesLastQuarter**](GetAdvancedMoonPhaseData200ResponseMoonPhasesLastQuarter.md) |  | [optional] 
**new_moon** | [**GetAdvancedMoonPhaseData200ResponseMoonPhasesNewMoon**](GetAdvancedMoonPhaseData200ResponseMoonPhasesNewMoon.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_advanced_moon_phase_data200_response_moon_phases import GetAdvancedMoonPhaseData200ResponseMoonPhases

# TODO update the JSON string below
json = "{}"
# create an instance of GetAdvancedMoonPhaseData200ResponseMoonPhases from a JSON string
get_advanced_moon_phase_data200_response_moon_phases_instance = GetAdvancedMoonPhaseData200ResponseMoonPhases.from_json(json)
# print the JSON string representation of the object
print(GetAdvancedMoonPhaseData200ResponseMoonPhases.to_json())

# convert the object into a dict
get_advanced_moon_phase_data200_response_moon_phases_dict = get_advanced_moon_phase_data200_response_moon_phases_instance.to_dict()
# create an instance of GetAdvancedMoonPhaseData200ResponseMoonPhases from a dict
get_advanced_moon_phase_data200_response_moon_phases_from_dict = GetAdvancedMoonPhaseData200ResponseMoonPhases.from_dict(get_advanced_moon_phase_data200_response_moon_phases_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


