# V3DeparturesSpecificParameters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_utc** | **datetime** | Filter by the date and time of the request (ISO 8601 UTC format) (default &#x3D; current date and time) | [optional] 
**direction_id** | **int** | Filter by identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id} | [optional] 
**expand** | **List[str]** | List of objects to be returned in full (i.e. expanded) - options include: All, Stop, Route, Run, Direction, Disruption, VehiclePosition, VehicleDescriptor or None.              Run must be expanded to receive VehiclePosition and VehicleDescriptor information. | [optional] 
**gtfs** | **bool** | Indicates that stop_id parameter will accept \&quot;GTFS stop_id\&quot; data | [optional] 
**include_cancelled** | **bool** | Indicates if cancelled services (if they exist) are returned (default &#x3D; false) - metropolitan train only | [optional] 
**include_geopath** | **bool** | Indicates if the route geopath should be returned | [optional] 
**look_backwards** | **bool** | Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default &#x3D; false). Requires max_results &amp;gt; 0. | [optional] 
**max_results** | **int** | Maximum number of results returned | [optional] 

## Example

```python
from openapi_client.models.v3_departures_specific_parameters import V3DeparturesSpecificParameters

# TODO update the JSON string below
json = "{}"
# create an instance of V3DeparturesSpecificParameters from a JSON string
v3_departures_specific_parameters_instance = V3DeparturesSpecificParameters.from_json(json)
# print the JSON string representation of the object
print(V3DeparturesSpecificParameters.to_json())

# convert the object into a dict
v3_departures_specific_parameters_dict = v3_departures_specific_parameters_instance.to_dict()
# create an instance of V3DeparturesSpecificParameters from a dict
v3_departures_specific_parameters_from_dict = V3DeparturesSpecificParameters.from_dict(v3_departures_specific_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


