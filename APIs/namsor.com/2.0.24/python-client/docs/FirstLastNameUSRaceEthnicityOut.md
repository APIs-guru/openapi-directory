# FirstLastNameUSRaceEthnicityOut

Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** | The first name (also known as given name) | [optional] 
**id** | **str** |  | [optional] 
**last_name** | **str** | The last name (also known as family name, or surname) | [optional] 
**probability_alt_calibrated** | **float** | The calibrated probability for raceEthnicity OR raceEthnicityAlt to have been guessed correctly. -1 &#x3D; still calibrating.  | [optional] 
**probability_calibrated** | **float** | The calibrated probability for raceEthnicity to have been guessed correctly. -1 &#x3D; still calibrating.  | [optional] 
**race_ethnicities_top** | **List[str]** | List &#39;race&#39;/ethnicities | [optional] 
**race_ethnicity** | **str** | Most likely US &#39;race&#39;/ethnicity | [optional] 
**race_ethnicity_alt** | **str** | Second most likely US &#39;race&#39;/ethnicity | [optional] 
**score** | **float** | Higher score is better, but score is not normalized. Use calibratedProbability if available.  | [optional] 
**script** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.first_last_name_us_race_ethnicity_out import FirstLastNameUSRaceEthnicityOut

# TODO update the JSON string below
json = "{}"
# create an instance of FirstLastNameUSRaceEthnicityOut from a JSON string
first_last_name_us_race_ethnicity_out_instance = FirstLastNameUSRaceEthnicityOut.from_json(json)
# print the JSON string representation of the object
print(FirstLastNameUSRaceEthnicityOut.to_json())

# convert the object into a dict
first_last_name_us_race_ethnicity_out_dict = first_last_name_us_race_ethnicity_out_instance.to_dict()
# create an instance of FirstLastNameUSRaceEthnicityOut from a dict
first_last_name_us_race_ethnicity_out_from_dict = FirstLastNameUSRaceEthnicityOut.from_dict(first_last_name_us_race_ethnicity_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


