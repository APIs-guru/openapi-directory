# ConnectionTypeCreateOrUpdateParameters

The parameters supplied to the create or update connection type operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Gets or sets the name of the connection type. | 
**properties** | [**ConnectionTypeCreateOrUpdateProperties**](ConnectionTypeCreateOrUpdateProperties.md) |  | 

## Example

```python
from openapi_client.models.connection_type_create_or_update_parameters import ConnectionTypeCreateOrUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionTypeCreateOrUpdateParameters from a JSON string
connection_type_create_or_update_parameters_instance = ConnectionTypeCreateOrUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(ConnectionTypeCreateOrUpdateParameters.to_json())

# convert the object into a dict
connection_type_create_or_update_parameters_dict = connection_type_create_or_update_parameters_instance.to_dict()
# create an instance of ConnectionTypeCreateOrUpdateParameters from a dict
connection_type_create_or_update_parameters_from_dict = ConnectionTypeCreateOrUpdateParameters.from_dict(connection_type_create_or_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


