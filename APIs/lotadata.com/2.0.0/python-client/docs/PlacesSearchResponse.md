# PlacesSearchResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**places** | [**List[PlaceDetail]**](PlaceDetail.md) |  | [optional] 
**query** | [**PlacesQuery**](PlacesQuery.md) |  | [optional] 
**stats** | [**SearchStatsMetaResult**](SearchStatsMetaResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.places_search_response import PlacesSearchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PlacesSearchResponse from a JSON string
places_search_response_instance = PlacesSearchResponse.from_json(json)
# print the JSON string representation of the object
print(PlacesSearchResponse.to_json())

# convert the object into a dict
places_search_response_dict = places_search_response_instance.to_dict()
# create an instance of PlacesSearchResponse from a dict
places_search_response_from_dict = PlacesSearchResponse.from_dict(places_search_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


