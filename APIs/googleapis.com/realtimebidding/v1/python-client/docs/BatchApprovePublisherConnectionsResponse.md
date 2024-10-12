# BatchApprovePublisherConnectionsResponse

A response for the request to approve a batch of publisher connections.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**publisher_connections** | [**List[PublisherConnection]**](PublisherConnection.md) | The publisher connections that have been approved. | [optional] 

## Example

```python
from openapi_client.models.batch_approve_publisher_connections_response import BatchApprovePublisherConnectionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchApprovePublisherConnectionsResponse from a JSON string
batch_approve_publisher_connections_response_instance = BatchApprovePublisherConnectionsResponse.from_json(json)
# print the JSON string representation of the object
print(BatchApprovePublisherConnectionsResponse.to_json())

# convert the object into a dict
batch_approve_publisher_connections_response_dict = batch_approve_publisher_connections_response_instance.to_dict()
# create an instance of BatchApprovePublisherConnectionsResponse from a dict
batch_approve_publisher_connections_response_from_dict = BatchApprovePublisherConnectionsResponse.from_dict(batch_approve_publisher_connections_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


