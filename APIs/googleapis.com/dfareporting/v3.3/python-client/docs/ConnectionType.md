# ConnectionType

Contains information about an internet connection type that can be targeted by ads. Clients can use the connection type to target mobile vs. broadband users.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of this connection type. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#connectionType\&quot;. | [optional] 
**name** | **str** | Name of this connection type. | [optional] 

## Example

```python
from openapi_client.models.connection_type import ConnectionType

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionType from a JSON string
connection_type_instance = ConnectionType.from_json(json)
# print the JSON string representation of the object
print(ConnectionType.to_json())

# convert the object into a dict
connection_type_dict = connection_type_instance.to_dict()
# create an instance of ConnectionType from a dict
connection_type_from_dict = ConnectionType.from_dict(connection_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


