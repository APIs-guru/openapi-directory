# Servers


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**servers** | [**List[Server]**](Server.md) | Array of servers | 
**totalnumber** | **int** | total number of users | [optional] 

## Example

```python
from openapi_client.models.servers import Servers

# TODO update the JSON string below
json = "{}"
# create an instance of Servers from a JSON string
servers_instance = Servers.from_json(json)
# print the JSON string representation of the object
print(Servers.to_json())

# convert the object into a dict
servers_dict = servers_instance.to_dict()
# create an instance of Servers from a dict
servers_from_dict = Servers.from_dict(servers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


