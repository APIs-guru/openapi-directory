# DeleteConnectionRequest

Request to delete a private service access connection. The call will fail if there are any managed service instances using this connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_network** | **str** | Required. The network that the consumer is using to connect with services. Must be in the form of projects/{project}/global/networks/{network} {project} is a project number, as in &#39;12345&#39; {network} is a network name. | [optional] 

## Example

```python
from openapi_client.models.delete_connection_request import DeleteConnectionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteConnectionRequest from a JSON string
delete_connection_request_instance = DeleteConnectionRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteConnectionRequest.to_json())

# convert the object into a dict
delete_connection_request_dict = delete_connection_request_instance.to_dict()
# create an instance of DeleteConnectionRequest from a dict
delete_connection_request_from_dict = DeleteConnectionRequest.from_dict(delete_connection_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


