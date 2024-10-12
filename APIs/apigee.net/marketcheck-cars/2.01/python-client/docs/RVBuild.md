# RVBuild

Describes the RV specification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**area** | **str** | Area of the RV | [optional] 
**var_class** | **str** | Class of the RV | [optional] 
**engine** | **str** | Engine of the RV | [optional] 
**fuel_type** | **str** | Fuel type of the RV | [optional] 
**gvwr** | **str** | Gross Vehicle Weight Ratio of RV | [optional] 
**length** | **str** | Length of the RV | [optional] 
**made_in** | **str** | Made in of the RV | [optional] 
**make** | **str** | RV Make | [optional] 
**model** | **str** | RV model | [optional] 
**sleeps** | **str** | Sleeps of the RV | [optional] 
**slideouts** | **str** | Slideouts of the RV | [optional] 
**transmission** | **str** | Transmission of the RV | [optional] 
**year** | **int** | Year of the RV | [optional] 

## Example

```python
from openapi_client.models.rv_build import RVBuild

# TODO update the JSON string below
json = "{}"
# create an instance of RVBuild from a JSON string
rv_build_instance = RVBuild.from_json(json)
# print the JSON string representation of the object
print(RVBuild.to_json())

# convert the object into a dict
rv_build_dict = rv_build_instance.to_dict()
# create an instance of RVBuild from a dict
rv_build_from_dict = RVBuild.from_dict(rv_build_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


