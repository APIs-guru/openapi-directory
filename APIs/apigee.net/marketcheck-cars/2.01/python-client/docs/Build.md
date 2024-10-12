# Build

Describes the Car specification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**antibrake_sys** | **str** | Antibrake system of the car | [optional] 
**body_subtype** | **str** | Body subtype of the car | [optional] 
**body_type** | **str** | Body type of the car | [optional] 
**city_miles** | **str** | City miles of the car | [optional] 
**city_mpg** | **int** | City Mileage in MPG | [optional] 
**cylinders** | **int** | No of cylinders of the car | [optional] 
**doors** | **int** | No of doors of the car | [optional] 
**drivetrain** | **str** | Drivetrain of the car | [optional] 
**engine** | **str** | Engine of the car | [optional] 
**engine_aspiration** | **str** | Engine aspiration of the car | [optional] 
**engine_block** | **str** | Engine block of the car | [optional] 
**engine_measure** | **str** | Engine block of the car | [optional] 
**engine_size** | **float** | Engine size of the car | [optional] 
**fuel_type** | **str** | Fuel type of the car | [optional] 
**highway_miles** | **str** | Highway miles of the car | [optional] 
**highway_mpg** | **int** | Highway Mileage in MPG | [optional] 
**made_in** | **str** | Made in of the car | [optional] 
**make** | **str** | Car Make | [optional] 
**model** | **str** | Car model | [optional] 
**opt_seating** | **str** | opt seating of the car | [optional] 
**overall_height** | **str** | Overall height of the car | [optional] 
**overall_length** | **str** | Overall length of the car | [optional] 
**overall_width** | **str** | Overall width of the car | [optional] 
**powertrain_type** | **str** | powertrain_type of the car | [optional] 
**short_trim** | **str** | Short trim of the car | [optional] 
**std_seating** | **str** | Std seating of the car | [optional] 
**steering_type** | **str** | Steering type of the car | [optional] 
**tank_size** | **str** | Tank size of the car | [optional] 
**transmission** | **str** | Transmission of the car | [optional] 
**trim** | **str** | Trim of the car | [optional] 
**trim_r** | **str** | Trim_r of the car | [optional] 
**vehicle_type** | **str** | Vehicle type of the car | [optional] 
**year** | **int** | Year of the Car | [optional] 

## Example

```python
from openapi_client.models.build import Build

# TODO update the JSON string below
json = "{}"
# create an instance of Build from a JSON string
build_instance = Build.from_json(json)
# print the JSON string representation of the object
print(Build.to_json())

# convert the object into a dict
build_dict = build_instance.to_dict()
# create an instance of Build from a dict
build_from_dict = Build.from_dict(build_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


