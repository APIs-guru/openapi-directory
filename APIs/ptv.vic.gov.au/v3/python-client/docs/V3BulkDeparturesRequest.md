# V3BulkDeparturesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_utc** | **datetime** | Filter by the date and time of the request (ISO 8601 UTC format) (default &#x3D; current date and time) | [optional] 
**expand** | **List[str]** | List objects to be returned in full (i.e. expanded) - options include: all, stop, route, run, direction, disruption, none | [optional] 
**include_cancelled** | **bool** | Indicates if cancelled services (if they exist) are returned (default &#x3D; false) - metropolitan train only | [optional] 
**include_geopath** | **bool** | Indicates if the route geopath should be returned | [optional] 
**look_backwards** | **bool** | Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default &#x3D; false). Requires max_results &amp;gt; 0. | [optional] 
**requests** | [**List[V3StopDepartureRequest]**](V3StopDepartureRequest.md) | Collection of departure requests | 

## Example

```python
from openapi_client.models.v3_bulk_departures_request import V3BulkDeparturesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of V3BulkDeparturesRequest from a JSON string
v3_bulk_departures_request_instance = V3BulkDeparturesRequest.from_json(json)
# print the JSON string representation of the object
print(V3BulkDeparturesRequest.to_json())

# convert the object into a dict
v3_bulk_departures_request_dict = v3_bulk_departures_request_instance.to_dict()
# create an instance of V3BulkDeparturesRequest from a dict
v3_bulk_departures_request_from_dict = V3BulkDeparturesRequest.from_dict(v3_bulk_departures_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


