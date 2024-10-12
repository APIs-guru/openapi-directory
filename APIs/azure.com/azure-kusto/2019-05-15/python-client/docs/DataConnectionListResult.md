# DataConnectionListResult

The list Kusto data connections operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[DataConnection]**](DataConnection.md) | The list of Kusto data connections. | [optional] 

## Example

```python
from openapi_client.models.data_connection_list_result import DataConnectionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DataConnectionListResult from a JSON string
data_connection_list_result_instance = DataConnectionListResult.from_json(json)
# print the JSON string representation of the object
print(DataConnectionListResult.to_json())

# convert the object into a dict
data_connection_list_result_dict = data_connection_list_result_instance.to_dict()
# create an instance of DataConnectionListResult from a dict
data_connection_list_result_from_dict = DataConnectionListResult.from_dict(data_connection_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


