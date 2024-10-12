# V3VehiclePosition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bearing** | **float** | Compass bearing of the vehicle when known, clockwise from True North, i.e., 0 is North and 90 is East. May be null.              Only available for some bus runs. | [optional] 
**datetime_utc** | **datetime** | Date and time that the vehicle position data was supplied. | [optional] 
**direction** | **str** | CIS - Metro Train Vehicle Location Direction | [optional] 
**easting** | **float** | CIS - Metro Train Vehicle Location Easting coordinate | [optional] 
**expiry_time** | **datetime** | CIS - Metro Train Vehicle Location data expiry time | [optional] 
**latitude** | **float** | Geographic coordinate of latitude of the vehicle when known. May be null.              Only available for some bus runs. | [optional] 
**longitude** | **float** | Geographic coordinate of longitude of the vehicle when known.               Only available for some bus runs. | [optional] 
**northing** | **float** | CIS - Metro Train Vehicle Location Northing coordinate | [optional] 
**supplier** | **str** | Supplier of vehicle position data. | [optional] 

## Example

```python
from openapi_client.models.v3_vehicle_position import V3VehiclePosition

# TODO update the JSON string below
json = "{}"
# create an instance of V3VehiclePosition from a JSON string
v3_vehicle_position_instance = V3VehiclePosition.from_json(json)
# print the JSON string representation of the object
print(V3VehiclePosition.to_json())

# convert the object into a dict
v3_vehicle_position_dict = v3_vehicle_position_instance.to_dict()
# create an instance of V3VehiclePosition from a dict
v3_vehicle_position_from_dict = V3VehiclePosition.from_dict(v3_vehicle_position_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


