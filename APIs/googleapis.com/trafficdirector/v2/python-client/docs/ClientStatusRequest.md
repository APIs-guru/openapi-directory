# ClientStatusRequest

Request for client status of clients identified by a list of NodeMatchers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_matchers** | [**List[NodeMatcher]**](NodeMatcher.md) | Management server can use these match criteria to identify clients. The match follows OR semantics. | [optional] 

## Example

```python
from openapi_client.models.client_status_request import ClientStatusRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ClientStatusRequest from a JSON string
client_status_request_instance = ClientStatusRequest.from_json(json)
# print the JSON string representation of the object
print(ClientStatusRequest.to_json())

# convert the object into a dict
client_status_request_dict = client_status_request_instance.to_dict()
# create an instance of ClientStatusRequest from a dict
client_status_request_from_dict = ClientStatusRequest.from_dict(client_status_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


