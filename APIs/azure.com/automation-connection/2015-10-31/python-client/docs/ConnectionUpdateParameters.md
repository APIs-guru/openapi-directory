# ConnectionUpdateParameters

The parameters supplied to the update connection operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Gets or sets the name of the connection. | [optional] 
**properties** | [**ConnectionUpdateProperties**](ConnectionUpdateProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.connection_update_parameters import ConnectionUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionUpdateParameters from a JSON string
connection_update_parameters_instance = ConnectionUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(ConnectionUpdateParameters.to_json())

# convert the object into a dict
connection_update_parameters_dict = connection_update_parameters_instance.to_dict()
# create an instance of ConnectionUpdateParameters from a dict
connection_update_parameters_from_dict = ConnectionUpdateParameters.from_dict(connection_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


