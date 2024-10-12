# ConnectionCreateOrUpdateParameters

The parameters supplied to the create or update connection operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Gets or sets the name of the connection. | 
**properties** | [**ConnectionCreateOrUpdateProperties**](ConnectionCreateOrUpdateProperties.md) |  | 

## Example

```python
from openapi_client.models.connection_create_or_update_parameters import ConnectionCreateOrUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionCreateOrUpdateParameters from a JSON string
connection_create_or_update_parameters_instance = ConnectionCreateOrUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(ConnectionCreateOrUpdateParameters.to_json())

# convert the object into a dict
connection_create_or_update_parameters_dict = connection_create_or_update_parameters_instance.to_dict()
# create an instance of ConnectionCreateOrUpdateParameters from a dict
connection_create_or_update_parameters_from_dict = ConnectionCreateOrUpdateParameters.from_dict(connection_create_or_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


