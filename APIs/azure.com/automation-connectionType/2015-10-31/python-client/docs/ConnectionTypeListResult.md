# ConnectionTypeListResult

The response model for the list connection type operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the next link. | [optional] 
**value** | [**List[ConnectionType]**](ConnectionType.md) | Gets or sets a list of connection types. | [optional] 

## Example

```python
from openapi_client.models.connection_type_list_result import ConnectionTypeListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionTypeListResult from a JSON string
connection_type_list_result_instance = ConnectionTypeListResult.from_json(json)
# print the JSON string representation of the object
print(ConnectionTypeListResult.to_json())

# convert the object into a dict
connection_type_list_result_dict = connection_type_list_result_instance.to_dict()
# create an instance of ConnectionTypeListResult from a dict
connection_type_list_result_from_dict = ConnectionTypeListResult.from_dict(connection_type_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


