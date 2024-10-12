# ListAvailableLocationsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locations** | [**List[Location]**](Location.md) | One page of results from a call to &#x60;ListAvailableLocations&#x60;. | [optional] 
**next_page_token** | **str** | If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results and all available locations have been listed. This token can be used in a subsequent call to &#x60;ListAvailableLocations&#x60; to find more locations. Page tokens are short-lived and should not be persisted. | [optional] 

## Example

```python
from openapi_client.models.list_available_locations_response import ListAvailableLocationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAvailableLocationsResponse from a JSON string
list_available_locations_response_instance = ListAvailableLocationsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAvailableLocationsResponse.to_json())

# convert the object into a dict
list_available_locations_response_dict = list_available_locations_response_instance.to_dict()
# create an instance of ListAvailableLocationsResponse from a dict
list_available_locations_response_from_dict = ListAvailableLocationsResponse.from_dict(list_available_locations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


