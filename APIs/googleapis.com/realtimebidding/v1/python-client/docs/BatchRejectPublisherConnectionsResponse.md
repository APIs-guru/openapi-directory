# BatchRejectPublisherConnectionsResponse

A response for the request to reject a batch of publisher connections.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**publisher_connections** | [**List[PublisherConnection]**](PublisherConnection.md) | The publisher connections that have been rejected. | [optional] 

## Example

```python
from openapi_client.models.batch_reject_publisher_connections_response import BatchRejectPublisherConnectionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchRejectPublisherConnectionsResponse from a JSON string
batch_reject_publisher_connections_response_instance = BatchRejectPublisherConnectionsResponse.from_json(json)
# print the JSON string representation of the object
print(BatchRejectPublisherConnectionsResponse.to_json())

# convert the object into a dict
batch_reject_publisher_connections_response_dict = batch_reject_publisher_connections_response_instance.to_dict()
# create an instance of BatchRejectPublisherConnectionsResponse from a dict
batch_reject_publisher_connections_response_from_dict = BatchRejectPublisherConnectionsResponse.from_dict(batch_reject_publisher_connections_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


