# PersonalNameGeoSubclassificationOut

Classified names at sub country level (region or state)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_iso2** | **str** | The input country ISO2 code | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** | The input name | [optional] 
**probability_alt_calibrated** | **float** | The calibrated probability for subclassification OR subclassificationAlt to have been guessed correctly. -1 &#x3D; still calibrating.  | [optional] 
**probability_calibrated** | **float** | The calibrated probability for subclassification to have been guessed correctly. -1 &#x3D; still calibrating.  | [optional] 
**score** | **float** | Compatibility to NamSor_v1 Origin score value. Higher score is better, but score is not normalized. Use calibratedProbability if available.  | [optional] 
**script** | **str** |  | [optional] 
**sub_classification** | **str** | Most likely subclassification ISO_3166-2 code | [optional] 
**sub_classification_alt** | **str** | Second best alternative : subclassification ISO_3166-2 code | [optional] 
**subclassification_top** | **List[str]** | List subclassification ISO_3166-2 codes (top 10) | [optional] 

## Example

```python
from openapi_client.models.personal_name_geo_subclassification_out import PersonalNameGeoSubclassificationOut

# TODO update the JSON string below
json = "{}"
# create an instance of PersonalNameGeoSubclassificationOut from a JSON string
personal_name_geo_subclassification_out_instance = PersonalNameGeoSubclassificationOut.from_json(json)
# print the JSON string representation of the object
print(PersonalNameGeoSubclassificationOut.to_json())

# convert the object into a dict
personal_name_geo_subclassification_out_dict = personal_name_geo_subclassification_out_instance.to_dict()
# create an instance of PersonalNameGeoSubclassificationOut from a dict
personal_name_geo_subclassification_out_from_dict = PersonalNameGeoSubclassificationOut.from_dict(personal_name_geo_subclassification_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


