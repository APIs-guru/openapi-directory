# ConnectionListResult

The response model for the list connection operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the next link. | [optional] 
**value** | [**List[Connection]**](Connection.md) | Gets or sets a list of connection. | [optional] 

## Example

```python
from openapi_client.models.connection_list_result import ConnectionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionListResult from a JSON string
connection_list_result_instance = ConnectionListResult.from_json(json)
# print the JSON string representation of the object
print(ConnectionListResult.to_json())

# convert the object into a dict
connection_list_result_dict = connection_list_result_instance.to_dict()
# create an instance of ConnectionListResult from a dict
connection_list_result_from_dict = ConnectionListResult.from_dict(connection_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


