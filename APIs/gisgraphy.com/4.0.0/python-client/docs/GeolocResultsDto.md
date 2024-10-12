# GeolocResultsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**q_time** | **int** | The execution time of the query in ms | [optional] 
**error** | **str** | A String only present if an error occured (e.g : empty Latitude or longitude) | [optional] 
**num_found** | **int** | The number of results display with this query (it takes the pagination into account) | [optional] 
**result** | [**List[GisFeatureDistance]**](GisFeatureDistance.md) |  | [optional] 

## Example

```python
from openapi_client.models.geoloc_results_dto import GeolocResultsDto

# TODO update the JSON string below
json = "{}"
# create an instance of GeolocResultsDto from a JSON string
geoloc_results_dto_instance = GeolocResultsDto.from_json(json)
# print the JSON string representation of the object
print(GeolocResultsDto.to_json())

# convert the object into a dict
geoloc_results_dto_dict = geoloc_results_dto_instance.to_dict()
# create an instance of GeolocResultsDto from a dict
geoloc_results_dto_from_dict = GeolocResultsDto.from_dict(geoloc_results_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


