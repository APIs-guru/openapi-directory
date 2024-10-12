# ConnectionType

Definition of the connection type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Gets the id of the resource. | [optional] [readonly] 
**name** | **str** | Gets the name of the connection type. | [optional] [readonly] 
**properties** | [**ConnectionTypeProperties**](ConnectionTypeProperties.md) |  | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

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


