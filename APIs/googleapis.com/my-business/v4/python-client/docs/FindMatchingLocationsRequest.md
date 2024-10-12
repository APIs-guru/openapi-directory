# FindMatchingLocationsRequest

Request message for Locations.FindMatchingLocations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_code** | **str** | The preferred language for the matching location (in BCP-47 format). | [optional] 
**max_cache_duration** | **str** | Deprecated. This field is ignored for all requests. | [optional] 
**num_results** | **int** | The number of matches to return. The default value is 3, with a maximum of 10. Note that latency may increase if more are requested. There is no pagination. | [optional] 

## Example

```python
from openapi_client.models.find_matching_locations_request import FindMatchingLocationsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of FindMatchingLocationsRequest from a JSON string
find_matching_locations_request_instance = FindMatchingLocationsRequest.from_json(json)
# print the JSON string representation of the object
print(FindMatchingLocationsRequest.to_json())

# convert the object into a dict
find_matching_locations_request_dict = find_matching_locations_request_instance.to_dict()
# create an instance of FindMatchingLocationsRequest from a dict
find_matching_locations_request_from_dict = FindMatchingLocationsRequest.from_dict(find_matching_locations_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


