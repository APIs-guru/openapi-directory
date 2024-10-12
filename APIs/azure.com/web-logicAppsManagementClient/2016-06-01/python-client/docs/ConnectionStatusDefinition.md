# ConnectionStatusDefinition

Connection status

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**ConnectionError**](ConnectionError.md) |  | [optional] 
**status** | **str** | The gateway status | [optional] 
**target** | **str** | Target of the error | [optional] 

## Example

```python
from openapi_client.models.connection_status_definition import ConnectionStatusDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionStatusDefinition from a JSON string
connection_status_definition_instance = ConnectionStatusDefinition.from_json(json)
# print the JSON string representation of the object
print(ConnectionStatusDefinition.to_json())

# convert the object into a dict
connection_status_definition_dict = connection_status_definition_instance.to_dict()
# create an instance of ConnectionStatusDefinition from a dict
connection_status_definition_from_dict = ConnectionStatusDefinition.from_dict(connection_status_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


