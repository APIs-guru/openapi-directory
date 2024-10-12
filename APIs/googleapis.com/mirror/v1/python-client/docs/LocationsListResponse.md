# LocationsListResponse

A list of Locations. This is the response from the server to GET requests on the locations collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Location]**](Location.md) | The list of locations. | [optional] 
**kind** | **str** | The type of resource. This is always mirror#locationsList. | [optional] [default to 'mirror#locationsList']

## Example

```python
from openapi_client.models.locations_list_response import LocationsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LocationsListResponse from a JSON string
locations_list_response_instance = LocationsListResponse.from_json(json)
# print the JSON string representation of the object
print(LocationsListResponse.to_json())

# convert the object into a dict
locations_list_response_dict = locations_list_response_instance.to_dict()
# create an instance of LocationsListResponse from a dict
locations_list_response_from_dict = LocationsListResponse.from_dict(locations_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


