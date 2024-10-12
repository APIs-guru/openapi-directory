# ListLocationsResponse

ListLocationsResponse returns the list of all GKE locations and their recommendation state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locations** | [**List[Location]**](Location.md) | A full list of GKE locations. | [optional] 
**next_page_token** | **str** | Only return ListLocationsResponse that occur after the page_token. This value should be populated from the ListLocationsResponse.next_page_token if that response token was set (which happens when listing more Locations than fit in a single ListLocationsResponse). | [optional] 

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


