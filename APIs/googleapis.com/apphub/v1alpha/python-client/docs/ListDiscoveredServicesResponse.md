# ListDiscoveredServicesResponse

Response for ListDiscoveredServices.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discovered_services** | [**List[DiscoveredService]**](DiscoveredService.md) | List of discovered services. | [optional] 
**next_page_token** | **str** | A token identifying a page of results the server should return. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_discovered_services_response import ListDiscoveredServicesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDiscoveredServicesResponse from a JSON string
list_discovered_services_response_instance = ListDiscoveredServicesResponse.from_json(json)
# print the JSON string representation of the object
print(ListDiscoveredServicesResponse.to_json())

# convert the object into a dict
list_discovered_services_response_dict = list_discovered_services_response_instance.to_dict()
# create an instance of ListDiscoveredServicesResponse from a dict
list_discovered_services_response_from_dict = ListDiscoveredServicesResponse.from_dict(list_discovered_services_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


