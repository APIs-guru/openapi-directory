# ConnectorObjectErrors

The list of connector object errors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ConnectorObjectError]**](ConnectorObjectError.md) | The value returned by the operation. | [optional] 

## Example

```python
from openapi_client.models.connector_object_errors import ConnectorObjectErrors

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorObjectErrors from a JSON string
connector_object_errors_instance = ConnectorObjectErrors.from_json(json)
# print the JSON string representation of the object
print(ConnectorObjectErrors.to_json())

# convert the object into a dict
connector_object_errors_dict = connector_object_errors_instance.to_dict()
# create an instance of ConnectorObjectErrors from a dict
connector_object_errors_from_dict = ConnectorObjectErrors.from_dict(connector_object_errors_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


