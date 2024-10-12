# ConnectionStatus

Connection status

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**kind** | **str** | Kind of resource | [optional] 
**location** | **str** | Resource Location | 
**name** | **str** | Resource Name | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] 

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


