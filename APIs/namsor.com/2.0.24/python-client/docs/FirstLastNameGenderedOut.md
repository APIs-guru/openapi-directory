# FirstLastNameGenderedOut

Represents the output of inferring the LIKELY gender from a personal name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** | The first name (also known as given name) | [optional] 
**gender_scale** | **float** | Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value. | [optional] 
**id** | **str** |  | [optional] 
**last_name** | **str** | The last name (also known as family name, or surname) | [optional] 
**likely_gender** | **str** | Most likely gender | [optional] 
**probability_calibrated** | **float** | The calibrated probability for inferred gender to have been guessed correctly. -1 &#x3D; still calibrating.  | [optional] 
**score** | **float** | Compatibility to NamSor_v1 Gender score value. Higher score is better, but score is not normalized. Use calibratedProbability if available.  | [optional] 
**script** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.first_last_name_gendered_out import FirstLastNameGenderedOut

# TODO update the JSON string below
json = "{}"
# create an instance of FirstLastNameGenderedOut from a JSON string
first_last_name_gendered_out_instance = FirstLastNameGenderedOut.from_json(json)
# print the JSON string representation of the object
print(FirstLastNameGenderedOut.to_json())

# convert the object into a dict
first_last_name_gendered_out_dict = first_last_name_gendered_out_instance.to_dict()
# create an instance of FirstLastNameGenderedOut from a dict
first_last_name_gendered_out_from_dict = FirstLastNameGenderedOut.from_dict(first_last_name_gendered_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


