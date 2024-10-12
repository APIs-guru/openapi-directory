# StreetSearchResultsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**q_time** | **int** | The execution time of the query in ms | [optional] 
**error** | **str** | A String only present if an error occured (e.g : empty Latitude or longitude) | [optional] 
**num_found** | **int** | The number of results display with this query (it takes the pagination into account) | [optional] 
**result** | [**List[StreetDistance]**](StreetDistance.md) |  | [optional] 

## Example

```python
from openapi_client.models.street_search_results_dto import StreetSearchResultsDto

# TODO update the JSON string below
json = "{}"
# create an instance of StreetSearchResultsDto from a JSON string
street_search_results_dto_instance = StreetSearchResultsDto.from_json(json)
# print the JSON string representation of the object
print(StreetSearchResultsDto.to_json())

# convert the object into a dict
street_search_results_dto_dict = street_search_results_dto_instance.to_dict()
# create an instance of StreetSearchResultsDto from a dict
street_search_results_dto_from_dict = StreetSearchResultsDto.from_dict(street_search_results_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


