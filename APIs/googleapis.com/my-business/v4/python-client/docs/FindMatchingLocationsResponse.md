# FindMatchingLocationsResponse

Response message for Locations.FindMatchingLocations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**match_time** | **str** | When the matching algorithm was last executed for this location. | [optional] 
**matched_locations** | [**List[MatchedLocation]**](MatchedLocation.md) | A collection of locations that are potential matches to the specified location, listed in order from best to least match. If there is an exact match, it will be in the first position. | [optional] 

## Example

```python
from openapi_client.models.find_matching_locations_response import FindMatchingLocationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FindMatchingLocationsResponse from a JSON string
find_matching_locations_response_instance = FindMatchingLocationsResponse.from_json(json)
# print the JSON string representation of the object
print(FindMatchingLocationsResponse.to_json())

# convert the object into a dict
find_matching_locations_response_dict = find_matching_locations_response_instance.to_dict()
# create an instance of FindMatchingLocationsResponse from a dict
find_matching_locations_response_from_dict = FindMatchingLocationsResponse.from_dict(find_matching_locations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


