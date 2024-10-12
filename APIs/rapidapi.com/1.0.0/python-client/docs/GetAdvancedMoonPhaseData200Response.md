# GetAdvancedMoonPhaseData200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datestamp** | **str** |  | [optional] 
**moon** | [**GetAdvancedMoonPhaseData200ResponseMoon**](GetAdvancedMoonPhaseData200ResponseMoon.md) |  | [optional] 
**moon_phases** | [**GetAdvancedMoonPhaseData200ResponseMoonPhases**](GetAdvancedMoonPhaseData200ResponseMoonPhases.md) |  | [optional] 
**sun** | [**GetAdvancedMoonPhaseData200ResponseSun**](GetAdvancedMoonPhaseData200ResponseSun.md) |  | [optional] 
**timestamp** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.get_advanced_moon_phase_data200_response import GetAdvancedMoonPhaseData200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetAdvancedMoonPhaseData200Response from a JSON string
get_advanced_moon_phase_data200_response_instance = GetAdvancedMoonPhaseData200Response.from_json(json)
# print the JSON string representation of the object
print(GetAdvancedMoonPhaseData200Response.to_json())

# convert the object into a dict
get_advanced_moon_phase_data200_response_dict = get_advanced_moon_phase_data200_response_instance.to_dict()
# create an instance of GetAdvancedMoonPhaseData200Response from a dict
get_advanced_moon_phase_data200_response_from_dict = GetAdvancedMoonPhaseData200Response.from_dict(get_advanced_moon_phase_data200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


