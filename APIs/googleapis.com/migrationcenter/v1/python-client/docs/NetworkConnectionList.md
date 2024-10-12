# NetworkConnectionList

Network connection list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[NetworkConnection]**](NetworkConnection.md) | Network connection entries. | [optional] 

## Example

```python
from openapi_client.models.network_connection_list import NetworkConnectionList

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkConnectionList from a JSON string
network_connection_list_instance = NetworkConnectionList.from_json(json)
# print the JSON string representation of the object
print(NetworkConnectionList.to_json())

# convert the object into a dict
network_connection_list_dict = network_connection_list_instance.to_dict()
# create an instance of NetworkConnectionList from a dict
network_connection_list_from_dict = NetworkConnectionList.from_dict(network_connection_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


