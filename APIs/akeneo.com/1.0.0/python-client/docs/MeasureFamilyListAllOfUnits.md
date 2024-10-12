# MeasureFamilyListAllOfUnits


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Measure code | [optional] 
**convert** | **object** | Mathematic operation to convert the unit into the standard unit | [optional] 
**symbol** | **str** | Measure symbol | [optional] 

## Example

```python
from openapi_client.models.measure_family_list_all_of_units import MeasureFamilyListAllOfUnits

# TODO update the JSON string below
json = "{}"
# create an instance of MeasureFamilyListAllOfUnits from a JSON string
measure_family_list_all_of_units_instance = MeasureFamilyListAllOfUnits.from_json(json)
# print the JSON string representation of the object
print(MeasureFamilyListAllOfUnits.to_json())

# convert the object into a dict
measure_family_list_all_of_units_dict = measure_family_list_all_of_units_instance.to_dict()
# create an instance of MeasureFamilyListAllOfUnits from a dict
measure_family_list_all_of_units_from_dict = MeasureFamilyListAllOfUnits.from_dict(measure_family_list_all_of_units_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


