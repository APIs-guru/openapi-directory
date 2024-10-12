# FindUnregisteredServicesResponse

Response for FindUnregisteredServices.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discovered_services** | [**List[DiscoveredService]**](DiscoveredService.md) | List of discovered services. | [optional] 
**next_page_token** | **str** | A token identifying a page of results the server should return. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.find_unregistered_services_response import FindUnregisteredServicesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FindUnregisteredServicesResponse from a JSON string
find_unregistered_services_response_instance = FindUnregisteredServicesResponse.from_json(json)
# print the JSON string representation of the object
print(FindUnregisteredServicesResponse.to_json())

# convert the object into a dict
find_unregistered_services_response_dict = find_unregistered_services_response_instance.to_dict()
# create an instance of FindUnregisteredServicesResponse from a dict
find_unregistered_services_response_from_dict = FindUnregisteredServicesResponse.from_dict(find_unregistered_services_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


