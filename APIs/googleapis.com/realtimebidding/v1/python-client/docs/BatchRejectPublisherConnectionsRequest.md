# BatchRejectPublisherConnectionsRequest

A request to reject a batch of publisher connections.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**names** | **List[str]** | Required. The names of the publishers with whom connection will be rejected. In the pattern &#x60;bidders/{bidder}/publisherConnections/{publisher}&#x60; where &#x60;{bidder}&#x60; is the account ID of the bidder, and &#x60;{publisher}&#x60; is the ads.txt/app-ads.txt publisher ID. | [optional] 

## Example

```python
from openapi_client.models.batch_reject_publisher_connections_request import BatchRejectPublisherConnectionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchRejectPublisherConnectionsRequest from a JSON string
batch_reject_publisher_connections_request_instance = BatchRejectPublisherConnectionsRequest.from_json(json)
# print the JSON string representation of the object
print(BatchRejectPublisherConnectionsRequest.to_json())

# convert the object into a dict
batch_reject_publisher_connections_request_dict = batch_reject_publisher_connections_request_instance.to_dict()
# create an instance of BatchRejectPublisherConnectionsRequest from a dict
batch_reject_publisher_connections_request_from_dict = BatchRejectPublisherConnectionsRequest.from_dict(batch_reject_publisher_connections_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


