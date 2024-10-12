# PersonalNameGenderedOut

Classified genderized names

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gender_scale** | **float** | Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value. | [optional] 
**id** | **str** |  | [optional] 
**likely_gender** | **str** | Most likely gender | [optional] 
**name** | **str** | The input name | [optional] 
**probability_calibrated** | **float** | The calibrated probability for inferred gender to have been guessed correctly. -1 &#x3D; still calibrating.  | [optional] 
**score** | **float** | Compatibility to NamSor_v1 Gender score value. Higher score is better, but score is not normalized. Use calibratedProbability if available.  | [optional] 
**script** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.personal_name_gendered_out import PersonalNameGenderedOut

# TODO update the JSON string below
json = "{}"
# create an instance of PersonalNameGenderedOut from a JSON string
personal_name_gendered_out_instance = PersonalNameGenderedOut.from_json(json)
# print the JSON string representation of the object
print(PersonalNameGenderedOut.to_json())

# convert the object into a dict
personal_name_gendered_out_dict = personal_name_gendered_out_instance.to_dict()
# create an instance of PersonalNameGenderedOut from a dict
personal_name_gendered_out_from_dict = PersonalNameGenderedOut.from_dict(personal_name_gendered_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


