# ListManagementServersResponse

Response message for listing management servers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**management_servers** | [**List[ManagementServer]**](ManagementServer.md) | The list of ManagementServer instances in the project for the specified location. If the &#x60;{location}&#x60; value in the request is \&quot;-\&quot;, the response contains a list of instances from all locations. In case any location is unreachable, the response will only return management servers in reachable locations and the &#39;unreachable&#39; field will be populated with a list of unreachable locations. | [optional] 
**next_page_token** | **str** | A token identifying a page of results the server should return. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_management_servers_response import ListManagementServersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListManagementServersResponse from a JSON string
list_management_servers_response_instance = ListManagementServersResponse.from_json(json)
# print the JSON string representation of the object
print(ListManagementServersResponse.to_json())

# convert the object into a dict
list_management_servers_response_dict = list_management_servers_response_instance.to_dict()
# create an instance of ListManagementServersResponse from a dict
list_management_servers_response_from_dict = ListManagementServersResponse.from_dict(list_management_servers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


