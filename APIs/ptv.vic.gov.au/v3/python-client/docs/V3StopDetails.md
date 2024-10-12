# V3StopDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disruption_ids** | **List[int]** | Disruption information identifier(s) | [optional] 
**route_type** | **int** | Transport mode identifier | [optional] 
**routes** | **List[object]** | Routes travelling through the stop | [optional] 
**station_description** | **str** | The definition applicable to the station_type; returns null for V/Line train | [optional] 
**station_type** | **str** | Type of metropolitan train station (i.e. \&quot;Premium\&quot;, \&quot;Host\&quot; or \&quot;Unstaffed\&quot; station); returns null for V/Line train | [optional] 
**stop_accessibility** | [**V3StopAccessibility**](V3StopAccessibility.md) |  | [optional] 
**stop_amenities** | [**V3StopAmenityDetails**](V3StopAmenityDetails.md) |  | [optional] 
**stop_id** | **int** | Stop identifier | [optional] 
**stop_landmark** | **str** | Landmark in proximity of stop | [optional] 
**stop_location** | [**V3StopLocation**](V3StopLocation.md) |  | [optional] 
**stop_name** | **str** | Name of stop | [optional] 
**stop_staffing** | [**V3StopStaffing**](V3StopStaffing.md) |  | [optional] 

## Example

```python
from openapi_client.models.v3_stop_details import V3StopDetails

# TODO update the JSON string below
json = "{}"
# create an instance of V3StopDetails from a JSON string
v3_stop_details_instance = V3StopDetails.from_json(json)
# print the JSON string representation of the object
print(V3StopDetails.to_json())

# convert the object into a dict
v3_stop_details_dict = v3_stop_details_instance.to_dict()
# create an instance of V3StopDetails from a dict
v3_stop_details_from_dict = V3StopDetails.from_dict(v3_stop_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


