# Connection

Full representation of the connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conn_type** | **str** | The connection type. | [optional] 
**connection_id** | **str** | The connection ID. | [optional] 
**description** | **str** | The description of the connection. | [optional] 
**host** | **str** | Host of the connection. | [optional] 
**login** | **str** | Login of the connection. | [optional] 
**port** | **int** | Port of the connection. | [optional] 
**var_schema** | **str** | Schema of the connection. | [optional] 
**extra** | **str** | Other values that cannot be put into another field, e.g. RSA keys. | [optional] 
**password** | **str** | Password of the connection. | [optional] 

## Example

```python
from openapi_client.models.connection import Connection

# TODO update the JSON string below
json = "{}"
# create an instance of Connection from a JSON string
connection_instance = Connection.from_json(json)
# print the JSON string representation of the object
print(Connection.to_json())

# convert the object into a dict
connection_dict = connection_instance.to_dict()
# create an instance of Connection from a dict
connection_from_dict = Connection.from_dict(connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


