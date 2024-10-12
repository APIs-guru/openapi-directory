# EmissionsGramsPerPax

Grouped emissions per seating class results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**business** | **int** | Emissions for one passenger in business class in grams. This field is always computed and populated, regardless of whether the aircraft has business class seats or not. | [optional] 
**economy** | **int** | Emissions for one passenger in economy class in grams. This field is always computed and populated, regardless of whether the aircraft has economy class seats or not. | [optional] 
**first** | **int** | Emissions for one passenger in first class in grams. This field is always computed and populated, regardless of whether the aircraft has first class seats or not. | [optional] 
**premium_economy** | **int** | Emissions for one passenger in premium economy class in grams. This field is always computed and populated, regardless of whether the aircraft has premium economy class seats or not. | [optional] 

## Example

```python
from openapi_client.models.emissions_grams_per_pax import EmissionsGramsPerPax

# TODO update the JSON string below
json = "{}"
# create an instance of EmissionsGramsPerPax from a JSON string
emissions_grams_per_pax_instance = EmissionsGramsPerPax.from_json(json)
# print the JSON string representation of the object
print(EmissionsGramsPerPax.to_json())

# convert the object into a dict
emissions_grams_per_pax_dict = emissions_grams_per_pax_instance.to_dict()
# create an instance of EmissionsGramsPerPax from a dict
emissions_grams_per_pax_from_dict = EmissionsGramsPerPax.from_dict(emissions_grams_per_pax_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


