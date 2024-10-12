# PersonalNameCastegroupOut

Caste group-coded names

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**castegroup** | **str** | Most likely caste group | [optional] 
**castegroup_alt** | **str** | Second best alternative : caste group  | [optional] 
**castegroup_top** | **List[str]** | List caste group (top 10) | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** | The input name. | [optional] 
**probability_alt_calibrated** | **float** | The calibrated probability for country OR countryAlt to have been guessed correctly. -1 &#x3D; still calibrating.  | [optional] 
**probability_calibrated** | **float** | The calibrated probability for country to have been guessed correctly. -1 &#x3D; still calibrating.  | [optional] 
**score** | **float** | Higher score is better, but score is not normalized. Use calibratedProbability if available.  | [optional] 
**script** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.personal_name_castegroup_out import PersonalNameCastegroupOut

# TODO update the JSON string below
json = "{}"
# create an instance of PersonalNameCastegroupOut from a JSON string
personal_name_castegroup_out_instance = PersonalNameCastegroupOut.from_json(json)
# print the JSON string representation of the object
print(PersonalNameCastegroupOut.to_json())

# convert the object into a dict
personal_name_castegroup_out_dict = personal_name_castegroup_out_instance.to_dict()
# create an instance of PersonalNameCastegroupOut from a dict
personal_name_castegroup_out_from_dict = PersonalNameCastegroupOut.from_dict(personal_name_castegroup_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


