# ListLocationsResponse

Response message for Locations.ListLocations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locations** | [**List[Location]**](Location.md) | The locations. | [optional] 
**next_page_token** | **str** | If the number of locations exceeded the requested page size, this field is populated with a token to fetch the next page of locations on a subsequent call to &#x60;ListLocations&#x60;. If there are no more locations, this field is not present in the response. | [optional] 
**total_size** | **int** | The approximate number of Locations in the list irrespective of pagination. | [optional] 

## Example

```python
from openapi_client.models.list_locations_response import ListLocationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListLocationsResponse from a JSON string
list_locations_response_instance = ListLocationsResponse.from_json(json)
# print the JSON string representation of the object
print(ListLocationsResponse.to_json())

# convert the object into a dict
list_locations_response_dict = list_locations_response_instance.to_dict()
# create an instance of ListLocationsResponse from a dict
list_locations_response_from_dict = ListLocationsResponse.from_dict(list_locations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


