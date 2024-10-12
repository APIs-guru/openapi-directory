# PredictedSpecs

Specs of predicted vehicle

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_exterior_color** | **str** | Base exterior color of vehicle | [optional] 
**base_interior_color** | **str** | base interior color of vehicle | [optional] 
**carfax_1_owner** | **bool** | Indicates whether car has had only one owner or not | [optional] 
**carfax_clean_title** | **bool** | Indicates whether car has clean ownership records | [optional] 
**city_mpg** | **float** | City mileage | [optional] 
**cylinders** | **int** | Number of cylinders | [optional] 
**doors** | **int** | Number of doors | [optional] 
**drivetrain** | **str** | Drivetrain of the vehicle | [optional] 
**engine_block** | **str** | Engine block of the vehicle | [optional] 
**engine_size** | **float** | Engine size | [optional] 
**highway_mpg** | **float** | Highway mileage | [optional] 
**is_certified** | **bool** | Certified vehicle | [optional] 
**latitude** | **float** | Latutide for the vehicle location | [optional] 
**longitude** | **float** | Longitude for the vehicle location | [optional] 
**make** | **str** | make | [optional] 
**miles** | **int** | Miles | [optional] 
**model** | **str** | model | [optional] 
**transmission** | **str** | transmission | [optional] 
**trim** | **str** | trim | [optional] 
**year** | **int** | year | [optional] 

## Example

```python
from openapi_client.models.predicted_specs import PredictedSpecs

# TODO update the JSON string below
json = "{}"
# create an instance of PredictedSpecs from a JSON string
predicted_specs_instance = PredictedSpecs.from_json(json)
# print the JSON string representation of the object
print(PredictedSpecs.to_json())

# convert the object into a dict
predicted_specs_dict = predicted_specs_instance.to_dict()
# create an instance of PredictedSpecs from a dict
predicted_specs_from_dict = PredictedSpecs.from_dict(predicted_specs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


