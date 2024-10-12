# ServerEndpointRecallError

Server endpoint recall error object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Count of occurences of the error | [optional] [readonly] 
**error_code** | **int** | Error code (HResult) | [optional] [readonly] 

## Example

```python
from openapi_client.models.server_endpoint_recall_error import ServerEndpointRecallError

# TODO update the JSON string below
json = "{}"
# create an instance of ServerEndpointRecallError from a JSON string
server_endpoint_recall_error_instance = ServerEndpointRecallError.from_json(json)
# print the JSON string representation of the object
print(ServerEndpointRecallError.to_json())

# convert the object into a dict
server_endpoint_recall_error_dict = server_endpoint_recall_error_instance.to_dict()
# create an instance of ServerEndpointRecallError from a dict
server_endpoint_recall_error_from_dict = ServerEndpointRecallError.from_dict(server_endpoint_recall_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


