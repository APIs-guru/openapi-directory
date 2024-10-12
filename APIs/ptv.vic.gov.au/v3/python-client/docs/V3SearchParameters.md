# V3SearchParameters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_addresses** | **bool** | Placeholder for future development; currently unavailable | [optional] 
**include_outlets** | **bool** | Indicates if outlets will be returned in response (default &#x3D; true) | [optional] 
**latitude** | **float** | Filter by geographic coordinate of latitude | [optional] 
**longitude** | **float** | Filter by geographic coordinate of longitude | [optional] 
**match_route_by_suburb** | **bool** | Indicates whether to find routes by suburbs in the search term (default &#x3D; true) | [optional] 
**match_stop_by_gtfs_stop_id** | **bool** | Indicates whether to search for stops according to a metlink stop ID (default &#x3D; false) | [optional] 
**match_stop_by_suburb** | **bool** | Indicates whether to find stops by suburbs in the search term (default &#x3D; true) | [optional] 
**max_distance** | **float** | Filter by maximum distance (in metres) from location specified via latitude and longitude parameters | [optional] 
**route_types** | **List[int]** | Filter by route_type; values returned via RouteTypes API (note: stops and routes are ordered by route_types specified) | [optional] 

## Example

```python
from openapi_client.models.v3_search_parameters import V3SearchParameters

# TODO update the JSON string below
json = "{}"
# create an instance of V3SearchParameters from a JSON string
v3_search_parameters_instance = V3SearchParameters.from_json(json)
# print the JSON string representation of the object
print(V3SearchParameters.to_json())

# convert the object into a dict
v3_search_parameters_dict = v3_search_parameters_instance.to_dict()
# create an instance of V3SearchParameters from a dict
v3_search_parameters_from_dict = V3SearchParameters.from_dict(v3_search_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


