# ListPublisherConnectionsResponse

A response to a request for listing publisher connections.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the ListPublisherConnectionsRequest.pageToken field in the subsequent call to the &#x60;ListPublisherConnections&#x60; method to retrieve the next page of results. | [optional] 
**publisher_connections** | [**List[PublisherConnection]**](PublisherConnection.md) | The list of publisher connections. | [optional] 

## Example

```python
from openapi_client.models.list_publisher_connections_response import ListPublisherConnectionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPublisherConnectionsResponse from a JSON string
list_publisher_connections_response_instance = ListPublisherConnectionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListPublisherConnectionsResponse.to_json())

# convert the object into a dict
list_publisher_connections_response_dict = list_publisher_connections_response_instance.to_dict()
# create an instance of ListPublisherConnectionsResponse from a dict
list_publisher_connections_response_from_dict = ListPublisherConnectionsResponse.from_dict(list_publisher_connections_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


