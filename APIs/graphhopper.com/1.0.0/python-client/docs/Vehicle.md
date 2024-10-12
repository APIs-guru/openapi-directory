# Vehicle


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_break** | [**VehicleBreak**](VehicleBreak.md) |  | [optional] 
**earliest_start** | **int** | Earliest start of vehicle in seconds. It is recommended to use the unix timestamp. | [optional] [default to 0]
**end_address** | [**Address**](Address.md) |  | [optional] 
**latest_end** | **int** | Latest end of vehicle in seconds, i.e. the time the vehicle needs to be at its end location at latest. | [optional] 
**max_activities** | **int** | Specifies the maximum number of activities a vehicle can conduct. | [optional] 
**max_distance** | **int** | Specifies the maximum distance (in meters) a vehicle can go. | [optional] 
**max_driving_time** | **int** | Specifies the maximum drive time (in seconds) a vehicle/driver can go, i.e. the maximum time on the road (service and waiting times are not included here) | [optional] 
**max_jobs** | **int** | Specifies the maximum number of jobs a vehicle can load. | [optional] 
**min_jobs** | **int** | Specifies the minimum number of jobs a vehicle should load. This is a soft constraint, i.e. if it is not possible to fulfill “min_jobs”, we will still try to get as close as possible to this constraint. | [optional] 
**move_to_end_address** | **bool** | Indicates whether a vehicle should be moved even though it has not been assigned any jobs. | [optional] 
**return_to_depot** | **bool** | If it is false, the algorithm decides where to end the vehicle route. It ends in one of your customers&#39; locations. The end is chosen such that it contributes to the overall objective function, e.g. min transport_time. If it is true, you can either specify a specific end location (which is then regarded as end depot) or you can leave it and the driver returns to its start location. | [optional] [default to True]
**skills** | **List[str]** | Array of skills, i.e. array of string (not case sensitive). | [optional] 
**start_address** | [**Address**](Address.md) |  | 
**type_id** | **str** | The type ID assigns a vehicle type to this vehicle. You can specify types in the array of vehicle types. If you omit the type ID, the default type is used. The default type is a &#x60;car&#x60; with a capacity of 0. | [optional] [default to 'default-type']
**vehicle_id** | **str** | Specifies the ID of the vehicle. Ids must be unique, i.e. if there are two vehicles with the same ID, an error is returned. | 

## Example

```python
from openapi_client.models.vehicle import Vehicle

# TODO update the JSON string below
json = "{}"
# create an instance of Vehicle from a JSON string
vehicle_instance = Vehicle.from_json(json)
# print the JSON string representation of the object
print(Vehicle.to_json())

# convert the object into a dict
vehicle_dict = vehicle_instance.to_dict()
# create an instance of Vehicle from a dict
vehicle_from_dict = Vehicle.from_dict(vehicle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


