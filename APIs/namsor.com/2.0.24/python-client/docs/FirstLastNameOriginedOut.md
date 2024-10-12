# FirstLastNameOriginedOut

Represents the output of inferring the LIKELY country of Origin from a personal name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**countries_origin_top** | **List[str]** | List countries of Origin (top 10) | [optional] 
**country_origin** | **str** | Most likely country of Origin | [optional] 
**country_origin_alt** | **str** | Second best alternative : country of Origin | [optional] 
**first_name** | **str** | The first name (also known as given name) | [optional] 
**id** | **str** |  | [optional] 
**last_name** | **str** | The last name (also known as family name, or surname) | [optional] 
**probability_alt_calibrated** | **float** | The calibrated probability for countryOrigin OR countryOriginAlt to have been guessed correctly. -1 &#x3D; still calibrating.  | [optional] 
**probability_calibrated** | **float** | The calibrated probability for countryOrigin to have been guessed correctly. -1 &#x3D; still calibrating.  | [optional] 
**region_origin** | **str** | Most likely region of Origin (based on countryOrigin ISO2 code) | [optional] 
**score** | **float** | Compatibility to NamSor_v1 Origin score value. Higher score is better, but score is not normalized. Use calibratedProbability if available.  | [optional] 
**script** | **str** |  | [optional] 
**sub_region_origin** | **str** | Most likely sub region of Origin (based on countryOrigin ISO2 code) | [optional] 
**top_region_origin** | **str** | Most likely top region of Origin (based on countryOrigin ISO2 code) | [optional] 

## Example

```python
from openapi_client.models.first_last_name_origined_out import FirstLastNameOriginedOut

# TODO update the JSON string below
json = "{}"
# create an instance of FirstLastNameOriginedOut from a JSON string
first_last_name_origined_out_instance = FirstLastNameOriginedOut.from_json(json)
# print the JSON string representation of the object
print(FirstLastNameOriginedOut.to_json())

# convert the object into a dict
first_last_name_origined_out_dict = first_last_name_origined_out_instance.to_dict()
# create an instance of FirstLastNameOriginedOut from a dict
first_last_name_origined_out_from_dict = FirstLastNameOriginedOut.from_dict(first_last_name_origined_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


