# FastSocket

Configuration of Fast Socket feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether Fast Socket features are enabled in the node pool. | [optional] 

## Example

```python
from openapi_client.models.fast_socket import FastSocket

# TODO update the JSON string below
json = "{}"
# create an instance of FastSocket from a JSON string
fast_socket_instance = FastSocket.from_json(json)
# print the JSON string representation of the object
print(FastSocket.to_json())

# convert the object into a dict
fast_socket_dict = fast_socket_instance.to_dict()
# create an instance of FastSocket from a dict
fast_socket_from_dict = FastSocket.from_dict(fast_socket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


