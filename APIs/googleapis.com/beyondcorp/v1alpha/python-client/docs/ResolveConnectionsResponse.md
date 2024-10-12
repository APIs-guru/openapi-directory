# ResolveConnectionsResponse

Response message for BeyondCorp.ResolveConnections.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_details** | [**List[ConnectionDetails]**](ConnectionDetails.md) | A list of BeyondCorp Connections with details in the project. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**unreachable** | **List[str]** | A list of locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.resolve_connections_response import ResolveConnectionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ResolveConnectionsResponse from a JSON string
resolve_connections_response_instance = ResolveConnectionsResponse.from_json(json)
# print the JSON string representation of the object
print(ResolveConnectionsResponse.to_json())

# convert the object into a dict
resolve_connections_response_dict = resolve_connections_response_instance.to_dict()
# create an instance of ResolveConnectionsResponse from a dict
resolve_connections_response_from_dict = ResolveConnectionsResponse.from_dict(resolve_connections_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


