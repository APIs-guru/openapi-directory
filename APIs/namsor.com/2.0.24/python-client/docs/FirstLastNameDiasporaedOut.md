# FirstLastNameDiasporaedOut

Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_iso2** | **str** | From input data, the countryIso2 of geographic context (US,CA etc.) | [optional] 
**ethnicities_top** | **List[str]** | List most likely ethnicities (top 10) | [optional] 
**ethnicity** | **str** | The most likely ethnicity | [optional] 
**ethnicity_alt** | **str** | The second best alternative ethnicity | [optional] 
**first_name** | **str** | The first name (also known as given name) | [optional] 
**id** | **str** |  | [optional] 
**last_name** | **str** | The last name (also known as family name, or surname) | [optional] 
**lifted** | **bool** | Indicates if the output ethnicity is based on machine learning only, or further lifted as a known fact by a country-specific rule. Let us know if you believe ethnicity is incorrect on a specific case where lifted is true. | [optional] 
**probability_alt_calibrated** | **float** | The calibrated probability for ethnicity OR ethnicityAlt to have been guessed correctly. -1 &#x3D; still calibrating.  | [optional] 
**probability_calibrated** | **float** | The calibrated probability for ethnicity to have been guessed correctly. -1 &#x3D; still calibrating.  | [optional] 
**score** | **float** | Compatibility to NamSor_v1 Diaspora score value. Higher score is better, but score is not normalized. Use calibratedProbability if available.  | [optional] 
**script** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.first_last_name_diasporaed_out import FirstLastNameDiasporaedOut

# TODO update the JSON string below
json = "{}"
# create an instance of FirstLastNameDiasporaedOut from a JSON string
first_last_name_diasporaed_out_instance = FirstLastNameDiasporaedOut.from_json(json)
# print the JSON string representation of the object
print(FirstLastNameDiasporaedOut.to_json())

# convert the object into a dict
first_last_name_diasporaed_out_dict = first_last_name_diasporaed_out_instance.to_dict()
# create an instance of FirstLastNameDiasporaedOut from a dict
first_last_name_diasporaed_out_from_dict = FirstLastNameDiasporaedOut.from_dict(first_last_name_diasporaed_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


