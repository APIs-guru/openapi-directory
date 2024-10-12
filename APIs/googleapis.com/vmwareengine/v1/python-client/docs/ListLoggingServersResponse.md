# ListLoggingServersResponse

Response message for VmwareEngine.ListLoggingServers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logging_servers** | [**List[LoggingServer]**](LoggingServer.md) | A list of Logging Servers. | [optional] 
**next_page_token** | **str** | A token, which can be send as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached when making an aggregated query using wildcards. | [optional] 

## Example

```python
from openapi_client.models.list_logging_servers_response import ListLoggingServersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListLoggingServersResponse from a JSON string
list_logging_servers_response_instance = ListLoggingServersResponse.from_json(json)
# print the JSON string representation of the object
print(ListLoggingServersResponse.to_json())

# convert the object into a dict
list_logging_servers_response_dict = list_logging_servers_response_instance.to_dict()
# create an instance of ListLoggingServersResponse from a dict
list_logging_servers_response_from_dict = ListLoggingServersResponse.from_dict(list_logging_servers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


