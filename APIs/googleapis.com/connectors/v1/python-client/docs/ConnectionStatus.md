# ConnectionStatus

ConnectionStatus indicates the state of the connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description. | [optional] 
**state** | **str** | State. | [optional] 
**status** | **str** | Status provides detailed information for the state. | [optional] 

## Example

```python
from openapi_client.models.connection_status import ConnectionStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionStatus from a JSON string
connection_status_instance = ConnectionStatus.from_json(json)
# print the JSON string representation of the object
print(ConnectionStatus.to_json())

# convert the object into a dict
connection_status_dict = connection_status_instance.to_dict()
# create an instance of ConnectionStatus from a dict
connection_status_from_dict = ConnectionStatus.from_dict(connection_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


