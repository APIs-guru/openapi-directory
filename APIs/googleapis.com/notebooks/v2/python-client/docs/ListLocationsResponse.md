# ListLocationsResponse

The response message for Locations.ListLocations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locations** | [**List[Location]**](Location.md) | A list of locations that matches the specified filter in the request. | [optional] 
**next_page_token** | **str** | The standard List next-page token. | [optional] 

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


