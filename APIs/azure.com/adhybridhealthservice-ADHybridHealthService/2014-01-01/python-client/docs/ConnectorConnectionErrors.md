# ConnectorConnectionErrors

The list of connector connection errors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ConnectorConnectionError]**](ConnectorConnectionError.md) | The value returned by the operation. | [optional] 

## Example

```python
from openapi_client.models.connector_connection_errors import ConnectorConnectionErrors

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorConnectionErrors from a JSON string
connector_connection_errors_instance = ConnectorConnectionErrors.from_json(json)
# print the JSON string representation of the object
print(ConnectorConnectionErrors.to_json())

# convert the object into a dict
connector_connection_errors_dict = connector_connection_errors_instance.to_dict()
# create an instance of ConnectorConnectionErrors from a dict
connector_connection_errors_from_dict = ConnectorConnectionErrors.from_dict(connector_connection_errors_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


