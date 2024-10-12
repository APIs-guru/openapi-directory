# PersonalNameGeoOut

Classified geo names

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**countries_top** | **List[str]** | List countries (top 10) | [optional] 
**country** | **str** | Most likely country  | [optional] 
**country_alt** | **str** | Second best alternative : country  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** | The input name. | [optional] 
**probability_alt_calibrated** | **float** | The calibrated probability for country OR countryAlt to have been guessed correctly. -1 &#x3D; still calibrating.  | [optional] 
**probability_calibrated** | **float** | The calibrated probability for country to have been guessed correctly. -1 &#x3D; still calibrating.  | [optional] 
**region** | **str** | Most likely region (based on country ISO2 code) | [optional] 
**score** | **float** | Higher score is better, but score is not normalized. Use calibratedProbability if available.  | [optional] 
**script** | **str** |  | [optional] 
**sub_region** | **str** | Most likely sub region (based on country ISO2 code) | [optional] 
**top_region** | **str** | Most likely top region (based on country ISO2 code) | [optional] 

## Example

```python
from openapi_client.models.personal_name_geo_out import PersonalNameGeoOut

# TODO update the JSON string below
json = "{}"
# create an instance of PersonalNameGeoOut from a JSON string
personal_name_geo_out_instance = PersonalNameGeoOut.from_json(json)
# print the JSON string representation of the object
print(PersonalNameGeoOut.to_json())

# convert the object into a dict
personal_name_geo_out_dict = personal_name_geo_out_instance.to_dict()
# create an instance of PersonalNameGeoOut from a dict
personal_name_geo_out_from_dict = PersonalNameGeoOut.from_dict(personal_name_geo_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


