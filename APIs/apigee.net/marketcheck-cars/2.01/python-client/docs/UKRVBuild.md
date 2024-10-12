# UKRVBuild

Describes the RV specification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**area** | **str** | Area of the RV | [optional] 
**berths** | **str** | berths of RV | [optional] 
**category** | **str** | category of the RV | [optional] 
**chassis** | **str** | chassis of RV | [optional] 
**drive_type** | **str** | drive_type of RV | [optional] 
**drivetrain** | **str** | Drivetrain of the RV | [optional] 
**engine** | **str** | Engine of the RV | [optional] 
**engine_size** | **str** | engine_size of RV | [optional] 
**exterior_length** | **str** | exterior_length of RV | [optional] 
**floorplan** | **str** | floorplan of RV | [optional] 
**floorplan_layout** | **str** | floorplan_layout of RV | [optional] 
**fuel_type** | **str** | Fuel type of the RV | [optional] 
**gvwr** | **str** | Gross Vehicle Weight Ratio of RV | [optional] 
**interior_length** | **str** | interior_length of RV | [optional] 
**inventory_type** | **str** | Inventory type of the RV | [optional] 
**make** | **str** | RV Make | [optional] 
**model** | **str** | RV model | [optional] 
**mtplm** | **str** | mtplm of RV | [optional] 
**slideouts** | **str** | Slideouts of the RV | [optional] 
**steering** | **str** | steering of RV | [optional] 
**sub_category** | **str** | sub_category of the RV | [optional] 
**transmission** | **str** | Transmission of the RV | [optional] 
**width** | **str** | width of RV | [optional] 
**year** | **int** | Year of the RV | [optional] 

## Example

```python
from openapi_client.models.ukrv_build import UKRVBuild

# TODO update the JSON string below
json = "{}"
# create an instance of UKRVBuild from a JSON string
ukrv_build_instance = UKRVBuild.from_json(json)
# print the JSON string representation of the object
print(UKRVBuild.to_json())

# convert the object into a dict
ukrv_build_dict = ukrv_build_instance.to_dict()
# create an instance of UKRVBuild from a dict
ukrv_build_from_dict = UKRVBuild.from_dict(ukrv_build_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


