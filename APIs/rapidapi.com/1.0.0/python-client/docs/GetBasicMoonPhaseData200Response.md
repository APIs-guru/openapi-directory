# GetBasicMoonPhaseData200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days_until_next_full_moon** | **float** |  | [optional] 
**days_until_next_new_moon** | **float** |  | [optional] 
**phase_name** | **str** |  | [optional] 
**stage** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.get_basic_moon_phase_data200_response import GetBasicMoonPhaseData200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetBasicMoonPhaseData200Response from a JSON string
get_basic_moon_phase_data200_response_instance = GetBasicMoonPhaseData200Response.from_json(json)
# print the JSON string representation of the object
print(GetBasicMoonPhaseData200Response.to_json())

# convert the object into a dict
get_basic_moon_phase_data200_response_dict = get_basic_moon_phase_data200_response_instance.to_dict()
# create an instance of GetBasicMoonPhaseData200Response from a dict
get_basic_moon_phase_data200_response_from_dict = GetBasicMoonPhaseData200Response.from_dict(get_basic_moon_phase_data200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


