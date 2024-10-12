# PersonalNameReligionedOut

religious-coded names

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**name** | **str** | The input name. | [optional] 
**probability_alt_calibrated** | **float** | The calibrated probability for country OR countryAlt to have been guessed correctly. -1 &#x3D; still calibrating.  | [optional] 
**probability_calibrated** | **float** | The calibrated probability for country to have been guessed correctly. -1 &#x3D; still calibrating.  | [optional] 
**religion** | **str** | Most likely religion | [optional] 
**religion_alt** | **str** | Second best alternative : religion  | [optional] 
**religions_top** | **List[str]** | List countries (top 10) | [optional] 
**score** | **float** | Higher score is better, but score is not normalized. Use calibratedProbability if available.  | [optional] 
**script** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.personal_name_religioned_out import PersonalNameReligionedOut

# TODO update the JSON string below
json = "{}"
# create an instance of PersonalNameReligionedOut from a JSON string
personal_name_religioned_out_instance = PersonalNameReligionedOut.from_json(json)
# print the JSON string representation of the object
print(PersonalNameReligionedOut.to_json())

# convert the object into a dict
personal_name_religioned_out_dict = personal_name_religioned_out_instance.to_dict()
# create an instance of PersonalNameReligionedOut from a dict
personal_name_religioned_out_from_dict = PersonalNameReligionedOut.from_dict(personal_name_religioned_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


