# ListServiceConnectionMapsResponse

Response for ListServiceConnectionMaps.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The next pagination token in the List response. It should be used as page_token for the following request. An empty value means no more result. | [optional] 
**service_connection_maps** | [**List[ServiceConnectionMap]**](ServiceConnectionMap.md) | ServiceConnectionMaps to be returned. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_service_connection_maps_response import ListServiceConnectionMapsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListServiceConnectionMapsResponse from a JSON string
list_service_connection_maps_response_instance = ListServiceConnectionMapsResponse.from_json(json)
# print the JSON string representation of the object
print(ListServiceConnectionMapsResponse.to_json())

# convert the object into a dict
list_service_connection_maps_response_dict = list_service_connection_maps_response_instance.to_dict()
# create an instance of ListServiceConnectionMapsResponse from a dict
list_service_connection_maps_response_from_dict = ListServiceConnectionMapsResponse.from_dict(list_service_connection_maps_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


