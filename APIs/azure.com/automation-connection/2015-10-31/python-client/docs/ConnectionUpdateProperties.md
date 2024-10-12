# ConnectionUpdateProperties

The properties of the update connection operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Gets or sets the description of the connection. | [optional] 
**field_definition_values** | **Dict[str, str]** | Gets or sets the field definition values of the connection. | [optional] 

## Example

```python
from openapi_client.models.connection_update_properties import ConnectionUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionUpdateProperties from a JSON string
connection_update_properties_instance = ConnectionUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(ConnectionUpdateProperties.to_json())

# convert the object into a dict
connection_update_properties_dict = connection_update_properties_instance.to_dict()
# create an instance of ConnectionUpdateProperties from a dict
connection_update_properties_from_dict = ConnectionUpdateProperties.from_dict(connection_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


