# FirstLastNameGeoSubclassificationOut

Represents the geographic name origin at a country subclassification level (usually regional or state level).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_iso2** | **str** | The input country ISO2 code | [optional] 
**first_name** | **str** | The first name (also known as given name) | [optional] 
**id** | **str** |  | [optional] 
**last_name** | **str** | The last name (also known as family name, or surname) | [optional] 
**probability_alt_calibrated** | **float** | The calibrated probability for subclassification OR subclassificationAlt to have been guessed correctly. -1 &#x3D; still calibrating.  | [optional] 
**probability_calibrated** | **float** | The calibrated probability for subclassification to have been guessed correctly. -1 &#x3D; still calibrating.  | [optional] 
**score** | **float** | Compatibility to NamSor_v1 Origin score value. Higher score is better, but score is not normalized. Use calibratedProbability if available.  | [optional] 
**script** | **str** |  | [optional] 
**sub_classification** | **str** | Most likely subclassification ISO_3166-2 code | [optional] 
**sub_classification_alt** | **str** | Second best alternative : subclassification ISO_3166-2 code | [optional] 
**subclassification_top** | **List[str]** | List subclassification ISO_3166-2 codes (top 10) | [optional] 

## Example

```python
from openapi_client.models.first_last_name_geo_subclassification_out import FirstLastNameGeoSubclassificationOut

# TODO update the JSON string below
json = "{}"
# create an instance of FirstLastNameGeoSubclassificationOut from a JSON string
first_last_name_geo_subclassification_out_instance = FirstLastNameGeoSubclassificationOut.from_json(json)
# print the JSON string representation of the object
print(FirstLastNameGeoSubclassificationOut.to_json())

# convert the object into a dict
first_last_name_geo_subclassification_out_dict = first_last_name_geo_subclassification_out_instance.to_dict()
# create an instance of FirstLastNameGeoSubclassificationOut from a dict
first_last_name_geo_subclassification_out_from_dict = FirstLastNameGeoSubclassificationOut.from_dict(first_last_name_geo_subclassification_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


